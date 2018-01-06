import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import { DOMParser } from 'xmldom';
import {MovieService} from "./movie.service";
import {Observable} from "rxjs/Observable";
import {keychain} from 'keychain'

@Injectable()
export class OmdbService extends MovieService {
    private baseUrl = "https://www.omdbapi.com/?apikey="+keychain.omdbApiKey;

    constructor (private http: Http) {
        super();
    }

    get(movieId: string): Observable<any> {
        return this.http.get(this.baseUrl+"&i="+movieId)
            .map(OmdbService.extractData)
            .catch(OmdbService.handleError);
    }
}
