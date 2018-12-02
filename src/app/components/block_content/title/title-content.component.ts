import { Component, forwardRef } from '@angular/core';
import { BlockContentComponent } from '../block-content';
import { TitleBlock } from '../../../models/title-block';
import { Block } from '../../../models/block';

@Component({
    selector: 'app-title-content',
    templateUrl: 'title-content.component.html',
    styleUrls: ['title-content.component.sass'],
    providers: [{provide: BlockContentComponent, useExisting: TitleContentComponent}]
})
export class TitleContentComponent extends BlockContentComponent {

    public makeBlock(): Block {
        const block: TitleBlock = new TitleBlock;
        return block;
    }

    public loadBlock(block: Block) {
    }

}
