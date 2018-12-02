
import {Block} from "./block";

export class ParagraphBlock extends Block {
    private _richText: string;

    constructor() {
        super();
        this._dType = "paragraph";
        this._richText = "";
    }
    
    get richText(): string {
        return this._richText;
    }

    set richText(value: string) {
        this._richText = value;
    }
}
