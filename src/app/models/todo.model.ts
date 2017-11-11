import * as uuid from 'uuid';

export class TodoModel {
	completed;
	title;
	uid;
	link = null;

	setTitle(title) {
		this.title = title.trim();
	}

	constructor(title) {
		this.uid = uuid.v4();
		this.completed = false;
		this.title = title.trim();
	}
}
