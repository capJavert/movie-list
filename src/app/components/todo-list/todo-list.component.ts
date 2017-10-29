import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoStoreService } from '../../services/todo-store.service';
import "../../rxjs.operators";
import * as firebase from "firebase";

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.template.html'
})
export class TodoListComponent implements OnInit{
    private _currentStatus: string;
    public isAuth = false;
    public isLoading = false;
    
	constructor(public todoStore: TodoStoreService, private route: ActivatedRoute) {
		this._currentStatus = '';
	}

	ngOnInit() {
        firebase.auth().getRedirectResult().then(async () => {
            if(!!firebase.auth().currentUser) {
                this.isAuth = true;
                this.isLoading = true;

                await this.todoStore.list();

                this.route.params
                    .map(params => params.status)
                    .subscribe((status) => {
                        this._currentStatus = status;
                        this.isLoading = false;
                    });
            }
        });
	}

	login() {
        this.todoStore.signIn();
    }

	remove(uid) {
		this.todoStore.remove(uid);
	}

	update() {
		this.todoStore.persist();
	}

	get todos() {
		if (this._currentStatus === 'completed') {
			return this.todoStore.completed;
		} else if (this._currentStatus === 'active') {
			return this.todoStore.remaining;
		} else {
			return this.todoStore.todos;
		}
	}

	allCompleted() {
		return this.todoStore.allCompleted();
	}

	setAllTo(toggleAll) {
		this.todoStore.setAllTo(toggleAll.checked);
	}
}
