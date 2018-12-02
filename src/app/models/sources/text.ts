import { Source } from './source';


export class TextSource extends Source {

    private _text: string;


    set text(text: string) {
        this._text = text;
    }

    get text() {
        return this._text;
    }

}
