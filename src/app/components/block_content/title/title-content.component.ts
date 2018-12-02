import {Component, forwardRef} from '@angular/core';
import { BlockContentComponent } from '../block-content';
import { TitleBlock } from '../../../internals/title-block';
import { Block } from '../../../internals/block';

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
