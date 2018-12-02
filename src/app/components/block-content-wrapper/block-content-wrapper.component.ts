import {Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {Block} from '../../models/block';
import { BlockContentComponent } from '../block_content/block-content';

@Component({
    selector: 'app-block-content-wrapper',
    templateUrl: 'block-content-wrapper.component.html',
    styleUrls: ['block-content-wrapper.component.sass']
})
export class BlockContentWrapperComponent implements OnInit {

    private contentDtype: String;
    private blockContent: BlockContentComponent;

    @ViewChild(BlockContentComponent)
    set content(content: BlockContentComponent) {
        this.blockContent = content;
    }


    constructor(
    ) {
        this.contentDtype = "title";
    }

    public ngOnInit(): void {
    }

    public saveBlock(blocks: Array<Block>, idx: number) {
        blocks[idx] = this.blockContent.makeBlock();
    }

    public loadBlock(block: Block) {
        this.contentDtype = block.dType;
        this.blockContent.loadBlock(block);
    }

}
