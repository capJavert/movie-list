import * as uuid from 'uuid';
import {WebsiteRef} from "./website-ref";

export class MovieModel {
	completed;
	title;
	uid;
    websiteRef: WebsiteRef;
    isOscarsNominated;

	setTitle(title) {
		this.title = title.trim();
	}

	constructor(title) {
		this.uid = uuid.v4();
		this.completed = false;
		this.title = title.trim();
		this.isOscarsNominated = false
	}
}
