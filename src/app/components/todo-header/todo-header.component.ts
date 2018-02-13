import {Component, OnInit} from '@angular/core';

import { TodoStoreService } from '../../services/todo-store.service';
import * as firebase from "firebase";
import {YifyService} from "../../services/yify.service";
import {WebsiteRef} from "../../models/website-ref";
import {OmdbService} from "../../services/omdb.service";
import {ActivatedRoute} from "@angular/router";

const URL_PATTERNS = {
    imdb: new RegExp("(http|https):\\/\\/(www\\.)?imdb\\.com\\/title\\/(.*)\\/.*"),
    yify: new RegExp("(http|https):\\/\\/(www\\.)?yts\\.am\\/movie\\/(.*)"),
};
@Component({
	selector: 'todo-header',
	templateUrl: './todo-header.template.html'
})
export class TodoHeaderComponent implements OnInit {
    private _currentStatus: string;
    newTodo = '';

	constructor(private todoStore:TodoStoreService,
				private omdbService: OmdbService,
				private yifyService: YifyService,
                private route: ActivatedRoute) {

        this._currentStatus = '';
	}

    ngOnInit(): void {
        this.route.params
            .map(params => params.status)
            .subscribe((status) => {
                this._currentStatus = status;
            });
    }

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

						this.omdbService.get(movieId).subscribe((movie) => {
							this.todoStore.addWebsiteRef(
								movie.title+" ("+movie.year+")", websiteRef,
								this._currentStatus == "oscars");
						});
						break;
					case "yify":
                        websiteRef.name = "YTS";

                        this.yifyService.search(movieId).subscribe((movies) => {
                        	if (movies.data.movies) {
                                let movie = movies.data.movies.find(movie => movie.url == websiteRef.link);

                                if(movie) {
                                    this.todoStore.addWebsiteRef(
                                        movie.title+" ("+movie.year+")", websiteRef,
                                        this._currentStatus == "oscars"
                                    );
                                }
							}
                        });
						break;
				}
			} else {
                this.todoStore.add(this.newTodo, this._currentStatus == "oscars");
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
