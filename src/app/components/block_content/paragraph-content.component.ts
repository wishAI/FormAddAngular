import {Component, ViewChild, ElementRef} from "@angular/core";
import { BlockContentComponent } from "./block-content";
import { Block } from "app/internals/block";
import { ParagraphBlock } from "../../internals/paragraph-block";

@Component({
    selector: "paragraph-content",
    templateUrl: "../../../resources/templates/paragraph-content.component.html",
    styleUrls: ["../../../resources/styles/paragraph-content.component.css"],
    providers: [{provide: BlockContentComponent, useExisting: ParagraphContentComponent}] 
})
export class ParagraphContentComponent extends BlockContentComponent {
    
    @ViewChild("textBox")
    txt_para: ElementRef

    public makeBlock(): Block {
        // create a new block
        let block: ParagraphBlock = new ParagraphBlock();
        
        // save the rich text to the block  
        block.richText = this.txt_para.nativeElement.html;

        return block;
    }

    public loadBlock(block: Block) {
        // put the rich text in the block to the text box
        console.log("load block: " + (<ParagraphBlock> block).richText);
        this.txt_para.nativeElement().html = (<ParagraphBlock> block).richText;
    }
}
