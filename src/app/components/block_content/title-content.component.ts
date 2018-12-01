import {Component, forwardRef} from "@angular/core";
import { BlockContentComponent } from "./block-content";
import { TitleBlock } from "../../internals/title-block";
import { Block } from "../../internals/block";

@Component({
    selector: "title-content",
    templateUrl: "../../../resources/templates/title-content.component.html",
    styleUrls: ["../../../resources/styles/title-content.component.css"],
    providers: [{provide: BlockContentComponent, useExisting: TitleContentComponent}] 
})
export class TitleContentComponent extends BlockContentComponent {

    public makeBlock(): Block {
        let block: TitleBlock = new TitleBlock; 
        return block;
    }

    public loadBlock(block: Block) {
    }
}
