import { ImageSource } from './sources/image';
import {Block} from './block';

export class ImageBlock extends Block {

    private images: ImageSource[];


    constructor() {
        super();
        this.images = [];
    }

    public isEmpty(): boolean {
        return this.images.length === 0;
    }

    public appendImage(image: ImageSource) {
        this.images.push(image);
    }

    public getImage(idx: number) {
        return this.images[idx];
    }

    public removeImage(image: ImageSource) {
        const idx: number = this.images.indexOf(image);
        if (idx > -1) {
            this.images.splice(idx, 1);
        }
    }

}
