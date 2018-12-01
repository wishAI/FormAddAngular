import {Component, Input, OnInit} from "@angular/core";
import {CommandManager} from "../../services/command-manager.service";

@Component({
    selector: "ribbon-tool",
    templateUrl: "../../../resources/templates/ribbon-tool.component.html",
    styleUrls: ["../../../resources/styles/ribbon-tool.component.css"]
})
export class RibbonToolComponent implements OnInit {
    @Input() public type: string;
    @Input() public isLeft: boolean;
    public name: string;

    constructor(
        private cmdManager: CommandManager
    ) {

    }

    ngOnInit(): void {
        // set name
        this.name = RibbonToolComponent.toolTypeToName(this.type);
    }

    private static toolTypeToName(type: string): string {
        switch(type) {
            case "open":
                return "打开";
            case "save":
                return "保存";
            case "paragraph":
                return "段落";
            case "image":
                return "图片";
            case "align":
                return "对齐";
            case "strong":
                return "重点";
            case "emoji":
                return "表情";
            case "uploadImage":
                return "上传图片";
            case "target":
                return "目标";
            case "submit":
                return "提交";
        }
    }

    public broadcastCommand(): void {
        switch(this.type) {
            case "open":
            case "save":
            case "paragraph":
            case "image":
            case "align":
            case "strong":
            case "emoji":
            case "uploadImage":
            case "target":
            case "submit":
                this.cmdManager.pushCommand(this.type);
                break;
        }
    }
}
