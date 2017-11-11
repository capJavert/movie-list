import { Component } from '@angular/core';

import { TodoStoreService } from '../../services/todo-store.service';
import * as firebase from "firebase";
import {MovieService} from "../../services/movie.service";

const URL_PATTERN = new RegExp("(http|https):\\/\\/(www\\.)?imdb\\.com\\/title\\/(.*)\\/.*");

@Component({
	selector: 'todo-header',
	templateUrl: './todo-header.template.html'
})
export class TodoHeaderComponent {
	newTodo = '';
	constructor(private todoStore:TodoStoreService, private movieService: MovieService) {}

	addTodo() {
		if (this.newTodo.trim().length) {
			if(TodoHeaderComponent.isMovieUrl(this.newTodo)) {
				let link = this.newTodo;
				let movieId = TodoHeaderComponent.getMovieId(this.newTodo);

				this.movieService.get(movieId).subscribe((movie) => {
                    this.todoStore.addWithLink(movie.title+" ("+movie.year+")", link);
				});
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
        return URL_PATTERN.test(string);
	}

	private static getMovieId(movieUrl: string) {
        let matcher = URL_PATTERN.exec(movieUrl);

		return matcher[matcher.length-1];
	}
}
