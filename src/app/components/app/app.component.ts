import { Component } from '@angular/core';

import {TodoStoreService} from "../../services/todo-store.service";

@Component({
	selector: 'todo-app',
	templateUrl: './app.template.html'
})
export class AppComponent {
    constructor(private todoStore: TodoStoreService) {
        this.todoStore = todoStore;
    }
}
