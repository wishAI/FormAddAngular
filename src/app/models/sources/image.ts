import { Source } from './source';


export class ImageSource extends Source {

    constructor(
        id: string,
        private _name: string
    ) {
        super(id);
    }

    get name() {
        return this._name;
    }

}
