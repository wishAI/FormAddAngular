
export abstract class Block {
    protected _dType: string;

    constructor() {
    }

    public get dType(): string {
        return this._dType;
    }
}
