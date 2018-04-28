import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodoStoreService } from './services/todo-store.service';
import {
	AppComponent,
	TodoListComponent,
	TodoFooterComponent,
	TodoHeaderComponent,
	TodoItemComponent
} from './components';
import { routes } from './routes';
import {TrimPipe} from "./components/pipes/trim/trim.pipe";
import {ImdbService} from "./services/imdb.service";
import {YifyService} from "./services/yify.service";
import {OmdbService} from "./services/omdb.service";

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		TodoListComponent,
		TodoFooterComponent,
		TodoHeaderComponent,
		TodoItemComponent,
		TrimPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routes),
	],
	providers: [
		TodoStoreService,
		OmdbService,
		YifyService
	]
})
export class MainModule {}
