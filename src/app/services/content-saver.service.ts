import {Injectable} from "@angular/core";
import {ContentSaveIntendListener} from "./content-save-intend-listener";
import {Block} from "../internals/block";


@Injectable()
export class ContentSaver {
    private _saveIntendListener: ContentSaveIntendListener;

    public set saveIntendListener(value: ContentSaveIntendListener) {
        this._saveIntendListener = value;
    }

    public saveBlock(idx: number, block: Block) {
        this._saveIntendListener.onContentSaveIntend(idx, block);
    }
}
