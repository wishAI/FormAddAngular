import {Component, ViewChild, ElementRef} from '@angular/core';
import { BlockContentComponent } from '../block-content';
import { Block } from 'app/internals/block';
import { ParagraphBlock } from '../../../internals/paragraph-block';

@Component({
    selector: 'app-paragraph-content',
    templateUrl: 'paragraph-content.component.html',
    styleUrls: ['paragraph-content.component.sass'],
    providers: [{provide: BlockContentComponent, useExisting: ParagraphContentComponent}]
})
export class ParagraphContentComponent extends BlockContentComponent {

    @ViewChild('textBox')
    txt_para;


    public makeBlock(): Block {
        // create a new block
        const block: ParagraphBlock = new ParagraphBlock();

        // save the rich text to the block
        block.richText = this.txt_para.nativeElement.html;

        return block;
    }

    public loadBlock(block: Block) {
        // put the rich text in the block to the text box
        console.log('load block: ' + (<ParagraphBlock> block).richText);
        this.txt_para.nativeElement().html = (<ParagraphBlock> block).richText;
    }

}
