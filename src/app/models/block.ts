import { DocBoard } from './doc-board';

export abstract class Block {

    // protected _dType: string;
    private _doc: DocBoard;


    constructor() {
        this._doc = null;
    }

    set doc(doc: DocBoard) {
        if (doc !== this._doc) {
            this._doc = doc;
            doc.addBlock(this);
        }
    }

}
