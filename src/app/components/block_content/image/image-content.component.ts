import {Component, Input, OnInit} from '@angular/core';
import {URLSearchParams} from '@angular/http';
import { BlockContentComponent } from '../block-content';
import { ImageBlock } from '../../../internals/image-block';
import { Block } from 'app/internals/block';
import { CommandManager } from '../../../services/command-manager.service';

declare var FormAddConfig;

@Component({
    selector: 'app-image-content',
    templateUrl: 'image-content.component.html',
    styleUrls: ['image-content.component.sass'],
    providers: [{provide: BlockContentComponent, useExisting: ImageContentComponent}]
})
export class ImageContentComponent extends BlockContentComponent implements OnInit {

    private imageId: number;

    public static imageIdToUrl(id: number): string {
        const query: URLSearchParams = new URLSearchParams();
        query.set('id', id.toString());
        return FormAddConfig.BACKWORD_ROOT_URL + 'src/image?' + query.toString();
    }

    constructor(
        private cmdManager: CommandManager
    ) {
        super();
    }

    public ngOnInit() {
        this.imageId = -1;
    }

    public broadcastUploadCmd() {
        let dic: Object = {};
    }

    public makeBlock(): Block {
        let block: ImageBlock = new ImageBlock();

        // append all the image ids
        block.appendImageId(this.imageId);

        return block;
    }

    public loadBlock(block: Block) {
        if(!(<ImageBlock> block).isEmpty()) {
            this.imageId = (<ImageBlock> block).pickImageId(0);
        }
    }
}
