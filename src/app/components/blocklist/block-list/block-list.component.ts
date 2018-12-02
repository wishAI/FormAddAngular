import {Component, Input, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {Block} from '../../../models/block';
import {CommandManager} from '../../../services/command-manager.service';
import {CommandListener} from '../../../services/command-listener.service';


@Component({
    selector: 'app-block-list',
    templateUrl: 'block-list.component.html',
    styleUrls: ['block-list.component.sass']
})
export class BlockListWrapperComponent implements CommandListener {

    @Input() public selectedIdx;
    @Input() private blocks: Block[];

    @ViewChildren('item')
    public blockItems: QueryList<ElementRef>;


    constructor(
        private cmdManager: CommandManager
    ) {
    }

    public onCommand(cmd: string, dec: Object): void {
        // listen for content switch command
        if (cmd == 'switchContent') {
            // highlight the selected item ? use radio button instead
            const idx: number = dec['index'];
            for (let item of this.blockItems.toArray()) {
                item.nativeElement.classList.remove('block-item-select');
            }
            this.blockItems[idx].nativeElement.classList.add('block-item-select');
        }
    }

    public onItemClick(idx: number): void {
        // switch content
        this.broadcastSwitchCommand(idx);
    }

    private broadcastSwitchCommand(idx: number): void {
        const dec: Object = { index: idx };
        this.cmdManager.pushCommand('switchContent', dec);
    }

}
