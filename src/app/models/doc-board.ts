import { Block } from './block';

export class DocBoard {

    private blocks: Block[];

    constructor() {
        this.blocks = [];
    }

    public addBlock(block: Block) {
        if (!this.blocks.includes(block)) {
            this.blocks.push(block);
            block.doc = this;
        }
    }

}
