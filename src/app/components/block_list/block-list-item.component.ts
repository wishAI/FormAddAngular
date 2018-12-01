import {Component, Input, AfterViewInit, OnInit, ViewChildren, QueryList, ElementRef} from "@angular/core";

@Component({
    selector: "block-list-item",
    templateUrl: "../../../resources/templates/block-list-item.component.html",
    styleUrls: ["../../../resources/styles/block-list-item.component.css"]
})
export class BlockListItemComponent implements AfterViewInit, OnInit {
    public name: string;
    public icoName: string;

    @Input() public type: string;

    constructor() {
    }

    public ngOnInit(): void {
        this.name = BlockListItemComponent.typeToName(this.type);
        this.icoName = BlockListItemComponent.typeToIcoName(this.type);
    }

    public ngAfterViewInit(): void {
    }


    private static typeToName(type: string): string {
        switch (type) {
            case "title":
                return "标题";
            case "paragraph":
                return "段落";
            case "image":
                return "图片";
        }
        return null;
    }

    private static typeToIcoName(type: string): string {
        switch (type) {
            case "title":
                return "title";
            case "paragraph":
                return "paragraph";
            case "image":
                return "image";
        }
    }
}
