import {Block} from "./block";

export class ImageBlock extends Block {

    private imageCacheIds: number[];

    constructor() {
        super();
        this._dType = "image";
        this.imageCacheIds = [];
    }

    public isEmpty(): boolean {
        return this.imageCacheIds.length == 0;
    }

    public appendImageId(cacheId: number) {
        this.imageCacheIds.push(cacheId);
    }

    public pickImageId(idx: number): number {
        return this.imageCacheIds[idx];
    }

    public removeImageId(idx: number) {
        
    }
}
