import { Component } from '@angular/core';

import { TodoStoreService } from '../../services/todo-store.service';
import * as firebase from "firebase";

@Component({
	selector: 'todo-header',
	templateUrl: './todo-header.template.html'
})
export class TodoHeaderComponent {
	newTodo = '';
	constructor(private todoStore:TodoStoreService) {}

	addTodo() {
		if (this.newTodo.trim().length) {
			this.todoStore.add(this.newTodo);
			this.newTodo = '';
		}
	}

	get isAuth() {
		return !!firebase.auth().currentUser;
	}
}
