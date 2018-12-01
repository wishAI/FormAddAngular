import {Component, Input, OnInit} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import { BlockContentComponent } from "./block-content";
import { ImageBlock } from "../../internals/image-block";
import { Block } from "app/internals/block";
import { CommandManager } from "../../services/command-manager.service";

declare var FormAddConfig;

@Component({
    selector: "image-content",
    templateUrl: "../../../resources/templates/image-content.component.html",
    styleUrls: ["../../../resources/styles/image-content.component.css"],
    providers: [{provide: BlockContentComponent, useExisting: ImageContentComponent}] 
})
export class ImageContentComponent extends BlockContentComponent implements OnInit {
    
    private imageId: number;

    constructor(
        private cmdManager: CommandManager
    ) {
        super();
    }
    
    public ngOnInit() {
        this.imageId = -1;
    }

    public static imageIdToUrl(id: number): string {
        let query: URLSearchParams = new URLSearchParams();
        query.set("id", id.toString());
        return FormAddConfig.BACKWORD_ROOT_URL + "src/image?" + query.toString();
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
