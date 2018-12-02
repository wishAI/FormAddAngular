
import {Block} from "../models/block";

export interface ContentSaveIntendListener {
    onContentSaveIntend(idx: number, block: Block): void;
}
