import {Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit, AfterViewChecked, Input} from '@angular/core';
import {CommandManager} from '../../services/command-manager.service';
import {CommandListener} from '../../services/command-listener.service';

@Component({
    selector: 'app-ribbon-wrapper',
    templateUrl: 'ribbon.component.html',
    styleUrls: ['ribbon.component.css']
})
export class RibbonWrapperComponent implements OnInit, CommandListener, AfterViewInit {

    @Input() public blockType: string;
    public _ribbonType: string;

    constructor(
        private _eleRef: ElementRef,
        private cmdManager: CommandManager
    ) {
        this._ribbonType = 'file';
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
        this.startGuiAction();
    }

    private startGuiAction(): void {
    }

    public onCommand(cmd: string, dec: string): void {
        // find the commands that opens the sub menu
    }

    get eleRef(): ElementRef {
        return this._eleRef;
    }

    set ribbonType(value: string) {
        this._ribbonType = value;
    }

    private switchRibbon(type: string): void {
        // change the ribbon type
        if(type != this._ribbonType) {
            this._ribbonType = type;
        }
    }
}
