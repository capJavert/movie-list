import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { DOMParser } from 'xmldom';

@Injectable()
export class MovieService {
    private baseUrl = "http://www.theimdbapi.org/api";

    constructor (private http: Http) {

    }

    get(movieId: string): Observable<any> {
        return this.http.get(this.baseUrl+"/movie?movie_id="+movieId)
            .map(MovieService.extractData)
            .catch(MovieService.handleError);
    }

    private static extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private static handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
