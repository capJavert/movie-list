import {Observable} from "rxjs/Observable";
import { Response } from '@angular/http';

export abstract class MovieService {
    protected static extractData(res: Response) {
        let body = res.json();

        let allPropertyNames = Object.keys(body);

        for (let j=0; j<allPropertyNames.length; j++) {
            let name = allPropertyNames[j];
            body[MovieService.lowerCaseFirstLetter(name)] = body[name];
            delete body[name]
        }

        return body || { };
    }

    protected static handleError (error: Response | any) {
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

    private static lowerCaseFirstLetter(value: string) {
        return value[0].toLowerCase() + value.slice(1);
    }
}