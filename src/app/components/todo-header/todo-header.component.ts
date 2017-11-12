import { Component } from '@angular/core';

import { TodoStoreService } from '../../services/todo-store.service';
import * as firebase from "firebase";
import {ImdbService} from "../../services/imdb.service";
import {YifyService} from "../../services/yify.service";
import {WebsiteRef} from "../../models/website-ref";

const URL_PATTERNS = {
    imdb: new RegExp("(http|https):\\/\\/(www\\.)?imdb\\.com\\/title\\/(.*)\\/.*"),
    yify: new RegExp("(http|https):\\/\\/(www\\.)?yts\\.ag\\/movie\\/(.*)"),
};
@Component({
	selector: 'todo-header',
	templateUrl: './todo-header.template.html'
})
export class TodoHeaderComponent {
	newTodo = '';
	constructor(private todoStore:TodoStoreService, private imdbService: ImdbService, private yifyService: YifyService) {}

	addTodo() {
		if (this.newTodo.trim().length) {
            let websiteRef = new WebsiteRef();

            websiteRef.origin = TodoHeaderComponent.isMovieUrl(this.newTodo);

            if(websiteRef.origin) {
                websiteRef.link = this.newTodo;
                let movieId = TodoHeaderComponent.getMovieId(this.newTodo, websiteRef.origin);

                switch(websiteRef.origin) {
					case "imdb":
						websiteRef.name = "IMDb";

						this.imdbService.get(movieId).subscribe((movie) => {
							this.todoStore.addWebsiteRef(movie.title+" ("+movie.year+")", websiteRef);
						});
						break;
					case "yify":
                        websiteRef.name = "YTS";

                        this.yifyService.search(movieId).subscribe((movies) => {
                        	if(movies.data.movies.length > 0) {
                                this.todoStore.addWebsiteRef(movies.data.movies[0].title+" ("+movies.data.movies[0].year+")", websiteRef);
							}
                        });
						break;
				}
			} else {
                this.todoStore.add(this.newTodo);
			}

			this.newTodo = '';
		}
	}

	get isAuth() {
		return !!firebase.auth().currentUser;
	}

	private static isMovieUrl(string: string) {
		for(let origin in URL_PATTERNS) {
            if (URL_PATTERNS.hasOwnProperty(origin)) {
                if(URL_PATTERNS[origin].test(string)) {
                	return origin;
				}
            }
		}

        return false;
	}

	private static getMovieId(movieUrl: string, urlOrigin: string) {
        let matcher = URL_PATTERNS[urlOrigin].exec(movieUrl);

		return matcher[matcher.length-1];
	}
}
