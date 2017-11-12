import * as uuid from 'uuid';
import {WebsiteRef} from "./website-ref";

export class TodoModel {
	completed;
	title;
	uid;
    websiteRef: WebsiteRef;

	setTitle(title) {
		this.title = title.trim();
	}

	constructor(title) {
		this.uid = uuid.v4();
		this.completed = false;
		this.title = title.trim();
	}
}
