import {Component, ViewChild, OnInit} from '@angular/core';
import {RibbonWrapperComponent} from './ribbon/ribbon.component';
import {CommandListener} from '../services/command-listener.service';
import {CommandManager} from '../services/command-manager.service';
import {Block} from '../internals/block';
import {TitleBlock} from '../internals/title-block';
import {ParagraphBlock} from '../internals/paragraph-block';
import {ImageBlock} from '../internals/image-block';
import {BlockListWrapperComponent} from './blocklist/block-list/block-list.component';
import {BlockContentWrapperComponent} from './block-content-wrapper/block-content-wrapper.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.sass']
})
export class AppComponent implements CommandListener, OnInit {

    private contentType: string;
    private contentIdx: number = 0;

    @ViewChild(RibbonWrapperComponent)
    private ribbonWrapper: RibbonWrapperComponent;
    @ViewChild(BlockListWrapperComponent)
    private blockList: BlockListWrapperComponent;
    @ViewChild(BlockContentWrapperComponent)
    private blockContentWrapper: BlockContentWrapperComponent;


    // all the blocks in the project here
    public blocks: Block[];

    constructor(
        private cmdManager: CommandManager
    ) {
        // append a title block
        this.blocks = [];
        const title: Block = new TitleBlock();
        this.blocks.push(title);
    }

    public ngOnInit(): void {
        this.cmdManager.appendCommandListener(this);
    }

    public onCommand(cmd: string, dic: Object): void {
        console.log("cmd:" + cmd);
        switch (cmd) {

            // case - insert blocks
            case "paragraph":
            case "image":
                this.appendBlock(cmd);
                break;

            // case - content modify
            case "switchContent":
                this.saveCurrentBlock();
                this.contentIdx = dic["index"];
                this.loadCurrentBlock();
                break;

            // case - upload sources
            case "uploadImage":
                break;

            // case - file command
            case "saveStatus":
                break;
        }
    }

    private saveCurrentBlock() {
        this.blockContentWrapper.saveBlock(this.blocks, this.contentIdx);
    }

    private loadCurrentBlock() {
        this.blockContentWrapper.loadBlock(this.blocks[this.contentIdx]);
    }

    private appendBlock(dType: string) {
        // create a new block based on dtype
        let block: Block;
        switch(dType) {
            case "image":
                block = new ImageBlock();
                break;
            case "paragraph":
                block = new ParagraphBlock();
                break;
        }

        // put the new block into list
        this.blocks.push(block);

        // switch to this new block
        this.cmdManager.pushCommand("switchContent", {"index": this.blocks.length - 1});
    }
}
