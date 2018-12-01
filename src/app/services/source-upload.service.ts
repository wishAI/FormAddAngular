import {Injectable} from "@angular/core";
import {Response, Headers, RequestOptions, Http} from "@angular/http";
import {Observable} from "rxjs";

declare var FormAddConfig: any;

@Injectable()
export class SourceUploadService {

    constructor(private http: Http) {
    }

    private extractResponse(res: Response): number {
        return parseInt(res.text());
    }

    private handleError(err: Object): Observable<Object> {
        return Observable.throw(err);
    }

    public storeSrc(src: Object, type: string): Observable<Object> {
        let headers: Headers = new Headers({"Content-type": "multipart/form-data"});
        let options: RequestOptions = new RequestOptions({"headers": headers});

        // build the request url
        let url: string = FormAddConfig.BACKWARD_ROOT_URL + "/src";
        switch(type) {
            case "file":
                url += "/doCacheFile";
                break;
            case "text":
                url += "/doCacheText";
                break;
        }

        return this.http.post(url, src, options)
            .map(this.extractResponse.bind(this))
            .catch(this.handleError.bind(this));
    }
}
