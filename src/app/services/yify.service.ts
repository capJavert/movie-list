import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { DOMParser } from 'xmldom';
import {MovieService} from "./movie.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class YifyService extends MovieService {
    private baseUrl = "https://yts.ag//api/v2";

    constructor (private http: Http) {
        super();
    }

    search(name: string): Observable<any> {
        name = name.substring(0, name.length-5);
        name = name.replace(/-/g, " ");

        return this.http.get(this.baseUrl+"/list_movies.json?query_term="+name)
            .map(YifyService.extractData)
            .catch(YifyService.handleError);
    }

    get(movieId: string): Observable<any> {
        return this.http.get(this.baseUrl+"/movie?movie_id="+movieId)
            .map(YifyService.extractData)
            .catch(YifyService.handleError);
    }
}
