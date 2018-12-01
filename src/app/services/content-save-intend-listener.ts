
import {Block} from "../internals/block";

export interface ContentSaveIntendListener {
    onContentSaveIntend(idx: number, block: Block): void;
}
