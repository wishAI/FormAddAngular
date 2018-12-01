import {Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild} from "@angular/core";
import {Block} from "../../internals/block";
import { BlockContentComponent } from "./block-content";

@Component({
    selector: "block-content-wrapper",
    templateUrl: "../../../resources/templates/block-content-wrapper.component.html",
    styleUrls: ["../../../resources/styles/block-content-wrapper.component.css"]
})
export class BlockContentWrapperComponent implements OnInit {

    private contentDtype: String;
    private blockContent: BlockContentComponent;

    constructor(
    ) {
        this.contentDtype = "title";
    }

    public ngOnInit(): void {
    }

    @ViewChild(BlockContentComponent)
    set content(content: BlockContentComponent) {
        this.blockContent = content;
    }

    public saveBlock(blocks: Array<Block>, idx: number) {
        blocks[idx] = this.blockContent.makeBlock();
    }

    public loadBlock(block: Block) {
        this.contentDtype = block.dType;
        this.blockContent.loadBlock(block);
    }
}
