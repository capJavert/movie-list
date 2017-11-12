import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { DOMParser } from 'xmldom';
import {MovieService} from "./movie.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ImdbService extends MovieService {
    private baseUrl = "https://www.theimdbapi.org/api";

    constructor (private http: Http) {
        super();
    }

    get(movieId: string): Observable<any> {
        return this.http.get(this.baseUrl+"/movie?movie_id="+movieId)
            .map(ImdbService.extractData)
            .catch(ImdbService.handleError);
    }
}
