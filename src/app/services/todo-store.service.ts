import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { MovieModel } from '../models/movie.model';
import "../rxjs.operators";
import {FirebaseConfig} from "./firebase.config";

const DB_NAME = "todos";

@Injectable()
export class TodoStoreService {
	todos = [];
    private remainingTodos = null;
    private completedTodos = null;
    private oscarsNominatedTodos = null;
    private provider;

	constructor() {
        firebase.initializeApp(FirebaseConfig);

        this.provider = new firebase.auth.GoogleAuthProvider();
        this.provider.addScope('https://www.googleapis.com/auth/plus.login');
	}

	signIn() {
	    firebase.auth().signInWithRedirect(this.provider).then();
    }

    async list() {
        await firebase.database().ref(DB_NAME).once('value', (snapshot) => {
            this.loadList(snapshot)
        });

        await firebase.database().ref(DB_NAME).on('value', (snapshot) => {
            this.loadList(snapshot)
        });
    }

    private loadList(snapshot) {
        if(snapshot.val() !== null) {
            let persistedTodos = snapshot.val();

            this.todos = persistedTodos.map((todo) => {
                let ret = new MovieModel(todo.title);
                ret.completed = todo.completed;
                if(todo.hasOwnProperty('websiteRef')) {
                    ret.websiteRef = todo.websiteRef;
                }
                ret.uid = todo.uid;

                if(todo.hasOwnProperty('isOscarsNominated')) {
                    ret.isOscarsNominated = todo.isOscarsNominated;
                } else {
                	ret.isOscarsNominated = false;
				}


                return ret;
            });

            this.persist();
        }
	}

	get(state) {
		return this.todos.filter((todo) => todo.completed === state.completed
			&& todo.isOscarsNominated === false);
	}

	allCompleted() {
		return this.todos.length === this.completed.length;
	}

	setAllTo(completed) {
		this.todos.forEach((todo) => todo.completed = completed);
		this.persist();
	}

	removeCompleted() {
		this.todos = this.get({ completed: false });
		this.persist();
	}

	get remaining() {
		if (!this.remainingTodos) {
			this.remainingTodos = this.get({ completed: false });
		}

		return this.remainingTodos;
	}

	get completed() {
        if (!this.completedTodos) {
            this.completedTodos = this.get({ completed: true });
        }

        return this.completedTodos;
    }

    get oscars() {
		return this.todos.filter((todo) => todo.isOscarsNominated === true);
    }

    get allRegular() {
        return this.todos.filter((todo) => todo.isOscarsNominated === false);
	}

	toggleCompletion(uid) {
		let todo = this._findByUid(uid);

		if (todo) {
			todo.completed = !todo.completed;
			this.persist();
		}
	}

	remove(uid) {
		let todo = this._findByUid(uid);

		if (todo) {
			this.todos.splice(this.todos.indexOf(todo), 1);
			this.persist();
		}
	}

	add(title, isOscarsNominated) {
		let todo = new MovieModel(title);
		todo.isOscarsNominated = isOscarsNominated;
		this.todos.unshift(todo);
		this.persist();
	}

    addWebsiteRef(title, websiteRef, isOscarsNominated) {
        let todo = new MovieModel(title);
        todo.websiteRef = websiteRef;
        todo.isOscarsNominated = isOscarsNominated;
        this.todos.unshift(todo);
        this.persist();
    }

	persist() {
		this._clearCache();
        firebase.database().ref(DB_NAME).set(this.todos).then();
	}

	_findByUid(uid) {
		return this.todos.find((todo) => todo.uid === uid);
	}

	_clearCache() {
		this.completedTodos = null;
		this.remainingTodos = null;
		this.oscarsNominatedTodos = null;
	}
}
