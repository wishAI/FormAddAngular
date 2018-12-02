
export abstract class Source {

    constructor(
        private _id: string
    ) {
    }

    get id() {
        return this._id;
    }

}
