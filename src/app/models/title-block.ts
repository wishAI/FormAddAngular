
import { Block } from "./block";
import { ImageSource } from './sources/image';


export class TitleBlock extends Block {

    private _title: string;
    private _type: string;
    private _image: ImageSource;

    constructor() {
        super();
        this._title = '';
        this._type = '';
        this._image = null;
    }

    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter image
     * @return {ImageSource}
     */
	public get image(): ImageSource {
		return this._image;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter image
     * @param {ImageSource} value
     */
	public set image(value: ImageSource) {
		this._image = value;
	}

}
