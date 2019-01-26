webpackJsonp([1],{0:function(t,e,o){t.exports=o("ty4W")},"1we5":function(t,e){t.exports='<li [class.completed]="todo.completed" [class.editing]="editing">\n    <div class="view">\n        <input id="movie-input" class="toggle" type="checkbox" (click)="toggleCompletion()" [checked]="todo.completed">\n        <label for="movie-input" (dblclick)="edit(todo)">\n            {{ todo.title | trim }}\n            <a [class]="\'movie-link movie-link-\'+todo.websiteRef.origin" *ngIf="todo.websiteRef" [href]="todo.websiteRef.link">{{todo.websiteRef.name}}</a>\n        </label>\n        <button class="destroy" (click)="remove()"></button>\n    </div>\n    <input class="edit" *ngIf="editing" [value]="todo.title" #editedtodo (blur)="stopEditing(editedtodo)" (keyup.enter)="stopEditing(editedtodo)" (keyup.escape)="cancelEditing()">\n</li>\n'},"6GLz":function(t,e){function o(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="6GLz"},"6SXA":function(t,e){t.exports='<footer class="footer" *ngIf="getCount()">\n    <span class="todo-count"><strong>{{ getRemainingCount() }}</strong> {{ getRemainingCount() == 1 ? \'movie\' : \'movies\' }} left</span>\n    <ul class="filters">\n        <li>\n            <a [routerLink]="[\'\']" [class.selected]="currentStatus == \'\'">All</a>\n        </li>\n        <li>\n            <a [routerLink]="[\'\', \'active\']" [class.selected]="currentStatus == \'active\'">Active</a>\n        </li>\n        <li>\n            <a [routerLink]="[\'\', \'completed\']" [class.selected]="currentStatus == \'completed\'">Completed</a>\n        </li>\n    </ul>\n    <button class="clear-completed" *ngIf="hasCompleted()" (click)="removeCompleted()">Clear completed</button>\n</footer>\n'},aqqm:function(t,e){t.exports={omdbApiKey:"959166c8"}},f1bv:function(t,e){t.exports="<router-outlet></router-outlet>\n"},lFaM:function(t,e){t.exports='<section class="todoapp">\n    <todo-header></todo-header>\n\n    <div *ngIf="isLoading" id="loader"></div>\n\n    <section *ngIf="isAuth || isLoading" class="main">\n        <label>\n            <input class="toggle-all" type="checkbox" #toggleall [checked]="allCompleted()" (click)="setAllTo(toggleall)">\n        </label>\n\n        <ul *ngIf="todos.length" class="todo-list">\n            <todo-item *ngFor="let todo of todos" [todo]="todo" (itemRemoved)="remove($event)" (itemModified)="update($event)"></todo-item>\n        </ul>\n    </section>\n    <todo-footer></todo-footer>\n</section>\n\n<section *ngIf="!isAuth && !isLoading" id="login-area">\n    <img (click)="login()" src="assets/img/btn_google_signin_light_normal_web.png" alt="Sign in" />\n</section>\n\n<footer *ngIf="isAuth" class="info">\n    <p>Double-click to edit a movie</p>\n</footer>\n'},tD1u:function(t,e){t.exports='<header class="header">\n    <h1>Movie list</h1>\n    <input *ngIf="!isAuth" disabled class="new-todo" placeholder="Add new movie.." [(ngModel)]="newTodo" autofocus="" (keyup.enter)="addTodo()">\n    <input *ngIf="isAuth" class="new-todo" placeholder="Add new movie.." [(ngModel)]="newTodo" autofocus="" (keyup.enter)="addTodo()">\n</header>\n'},ty4W:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=o("DlMc"),r=(o("Gvdl"),o("nzH4")),s=o("D8Yg"),c=o("36+m"),a=o("24R9"),u=o("zKH5"),l=o("Rw+2"),f=o("Sazm"),d=function(){function t(t){this.uid=i.v4(),this.completed=!1,this.title=t.trim(),this.isOscarsNominated=!1}return t.prototype.setTitle=function(t){this.title=t.trim()},t}(),p=(o("MDfR"),o("xgm2"),o("bqhO"),o("aTdd"),o("owTz"),o("VwFy"),o("EN1B"),o("2vRS"),{apiKey:"AIzaSyB1tptv7puWh_09MZadQCQa-5K45sKpdO8",authDomain:"movie-list-9dba0.firebaseapp.com",databaseURL:"https://movie-list-9dba0.firebaseio.com",storageBucket:"movie-list-9dba0.appspot.com"}),h=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},y=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},m=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function s(t){try{a(n.next(t))}catch(t){r(t)}}function c(t){try{a(n.throw(t))}catch(t){r(t)}}function a(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(s,c)}a((n=n.apply(t,e||[])).next())})},b=this&&this.__generator||function(t,e){var o,n,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(i=n[2&r[0]?"return":r[0]?"throw":"next"])&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[0,i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}},g=function(){function t(){this.todos=[],this.remainingTodos=null,this.completedTodos=null,this.oscarsNominatedTodos=null,f.initializeApp(p),this.provider=new f.auth.GoogleAuthProvider,this.provider.addScope("https://www.googleapis.com/auth/plus.login")}return t.prototype.signIn=function(){f.auth().signInWithRedirect(this.provider).then()},t.prototype.list=function(){return m(this,void 0,void 0,function(){var t=this;return b(this,function(e){switch(e.label){case 0:return[4,f.database().ref("todos").once("value",function(e){t.loadList(e)})];case 1:return e.sent(),[4,f.database().ref("todos").on("value",function(e){t.loadList(e)})];case 2:return e.sent(),[2]}})})},t.prototype.loadList=function(t){if(null!==t.val()){var e=t.val();this.todos=e.map(function(t){var e=new d(t.title);return e.completed=t.completed,t.hasOwnProperty("websiteRef")&&(e.websiteRef=t.websiteRef),e.uid=t.uid,t.hasOwnProperty("isOscarsNominated")?e.isOscarsNominated=t.isOscarsNominated:e.isOscarsNominated=!1,e}),this.persist()}},t.prototype.get=function(t){return this.todos.filter(function(e){return e.completed===t.completed&&!1===e.isOscarsNominated})},t.prototype.allCompleted=function(){return this.todos.length===this.completed.length},t.prototype.setAllTo=function(t){this.todos.forEach(function(e){return e.completed=t}),this.persist()},t.prototype.removeCompleted=function(){this.todos=this.get({completed:!1}),this.persist()},Object.defineProperty(t.prototype,"remaining",{get:function(){return this.remainingTodos||(this.remainingTodos=this.get({completed:!1})),this.remainingTodos},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"completed",{get:function(){return this.completedTodos||(this.completedTodos=this.get({completed:!0})),this.completedTodos},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"oscars",{get:function(){return this.todos.filter(function(t){return!0===t.isOscarsNominated})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allRegular",{get:function(){return this.todos.filter(function(t){return!1===t.isOscarsNominated})},enumerable:!0,configurable:!0}),t.prototype.toggleCompletion=function(t){var e=this._findByUid(t);e&&(e.completed=!e.completed,this.persist())},t.prototype.remove=function(t){var e=this._findByUid(t);e&&(this.todos.splice(this.todos.indexOf(e),1),this.persist())},t.prototype.add=function(t,e){var o=new d(t);o.isOscarsNominated=e,this.todos.unshift(o),this.persist()},t.prototype.addWebsiteRef=function(t,e,o){var n=new d(t);n.websiteRef=e,n.isOscarsNominated=o,this.todos.unshift(n),this.persist()},t.prototype.persist=function(){this._clearCache(),f.database().ref("todos").set(this.todos).then()},t.prototype._findByUid=function(t){return this.todos.find(function(e){return e.uid===t})},t.prototype._clearCache=function(){this.completedTodos=null,this.remainingTodos=null,this.oscarsNominatedTodos=null},t=h([Object(l.I)(),y("design:paramtypes",[])],t)}(),v=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},w=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},O=function(){function t(t){this.todoStore=t,this.todoStore=t}return t=v([Object(l.u)({selector:"todo-app",template:o("f1bv")}),w("design:paramtypes",["function"==typeof(e="undefined"!=typeof g&&g)&&e||Object])],t);var e}(),_=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},R=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},j=function(){function t(t,e){this.todoStore=t,this.route=e,this.currentStatus=""}return t.prototype.ngOnInit=function(){var t=this;this.route.params.map(function(t){return t.status}).subscribe(function(e){t.currentStatus=e||""})},t.prototype.removeCompleted=function(){confirm("This will delete all completed movies? Are you sure?")&&this.todoStore.removeCompleted()},t.prototype.getCount=function(){return this.todoStore.todos.length},t.prototype.getRemainingCount=function(){return this.todoStore.remaining.length},t.prototype.hasCompleted=function(){return this.todoStore.completed.length>0},t=_([Object(l.u)({selector:"todo-footer",template:o("6SXA")}),R("design:paramtypes",["function"==typeof(e="undefined"!=typeof g&&g)&&e||Object,"function"==typeof(n="undefined"!=typeof u.a&&u.a)&&n||Object])],t);var e,n}(),S=o("YaPU"),P=function(){function t(){}return t.extractData=function(e){for(var o=e.json(),n=Object.keys(o),i=0;i<n.length;i++){var r=n[i],s=t.lowerCaseFirstLetter(r);r!==s&&(o[s]=o[r],delete o[r])}return o||{}},t.handleError=function(t){var e;if(t instanceof a.c){var o=t.json()||"",n=o.error||JSON.stringify(o);e=t.status+" - "+(t.statusText||"")+" "+n}else e=t.message?t.message:t.toString();return console.error(e),S.a.throw(e)},t.lowerCaseFirstLetter=function(t){return t[0].toLowerCase()+t.slice(1)},t}(),k=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),T=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},x=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},C=function(t){function e(e){var o=t.call(this)||this;return o.http=e,o.baseUrl="https://yts.am/api/v2",o}return k(e,t),o=e,e.prototype.search=function(t){return t=(t=t.substring(0,t.length-5)).replace(/-/g," "),this.http.get(this.baseUrl+"/list_movies.json?query_term="+t).map(o.extractData).catch(o.handleError)},e.prototype.get=function(t){return this.http.get(this.baseUrl+"/movie?movie_id="+t).map(o.extractData).catch(o.handleError)},e=o=T([Object(l.I)(),x("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.a&&a.a)&&n||Object])],e);var o,n}(P),A=function(){return function(){}}(),D=o("aqqm"),I=D,M=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),L=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},E=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},N=function(t){function e(e){var o=t.call(this)||this;return o.http=e,o.baseUrl="https://www.omdbapi.com/?apikey="+I.omdbApiKey,o}return M(e,t),o=e,e.prototype.get=function(t){return this.http.get(this.baseUrl+"&i="+t).map(o.extractData).catch(o.handleError)},e=o=L([Object(l.I)(),E("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.a&&a.a)&&n||Object])],e);var o,n}(P),U=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},z=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},K={imdb:new RegExp("(http|https):\\/\\/(www\\.)?imdb\\.com\\/title\\/(.*)\\/.*"),yify:new RegExp("(http|https):\\/\\/(www\\.)?yts\\.am\\/movie\\/(.*)")},W=function(){function t(t,e,o,n){this.todoStore=t,this.omdbService=e,this.yifyService=o,this.route=n,this.newTodo="",this._currentStatus=""}return e=t,t.prototype.ngOnInit=function(){var t=this;this.route.params.map(function(t){return t.status}).subscribe(function(e){t._currentStatus=e})},t.prototype.addTodo=function(){var t=this;if(this.newTodo.trim().length){var o=new A;if(o.origin=e.isMovieUrl(this.newTodo),o.origin){o.link=this.newTodo;var n=e.getMovieId(this.newTodo,o.origin);switch(o.origin){case"imdb":o.name="IMDb",this.omdbService.get(n).subscribe(function(e){t.todoStore.addWebsiteRef(e.title+" ("+e.year+")",o,"oscars"==t._currentStatus)});break;case"yify":o.name="YTS",this.yifyService.search(n).subscribe(function(e){if(e.data.movies){var n=e.data.movies.find(function(t){return t.url==o.link});n&&t.todoStore.addWebsiteRef(n.title+" ("+n.year+")",o,"oscars"==t._currentStatus)}})}}else this.todoStore.add(this.newTodo,"oscars"==this._currentStatus);this.newTodo=""}},Object.defineProperty(t.prototype,"isAuth",{get:function(){return!!f.auth().currentUser},enumerable:!0,configurable:!0}),t.isMovieUrl=function(t){for(var e in K)if(K.hasOwnProperty(e)&&K[e].test(t))return e;return!1},t.getMovieId=function(t,e){var o=K[e].exec(t);return o[o.length-1]},t=e=U([Object(l.u)({selector:"todo-header",template:o("tD1u")}),z("design:paramtypes",["function"==typeof(n="undefined"!=typeof g&&g)&&n||Object,"function"==typeof(i="undefined"!=typeof N&&N)&&i||Object,"function"==typeof(r="undefined"!=typeof C&&C)&&r||Object,"function"==typeof(s="undefined"!=typeof u.a&&u.a)&&s||Object])],t);var e,n,i,r,s}(),q=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},B=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},F=function(){function t(){this.itemModified=new l.D,this.itemRemoved=new l.D,this.editing=!1}return t.prototype.cancelEditing=function(){this.editing=!1},t.prototype.stopEditing=function(t){this.todo.setTitle(t.value),this.editing=!1,0===this.todo.title.length?this.remove():this.update()},t.prototype.edit=function(){this.editing=!0},t.prototype.toggleCompletion=function(){this.todo.completed=!this.todo.completed,this.update()},t.prototype.remove=function(){this.itemRemoved.next(this.todo.uid)},t.prototype.update=function(){this.itemModified.next(this.todo.uid)},q([Object(l.K)(),B("design:type",Object)],t.prototype,"todo",void 0),q([Object(l.X)(),B("design:type",Object)],t.prototype,"itemModified",void 0),q([Object(l.X)(),B("design:type",Object)],t.prototype,"itemRemoved",void 0),t=q([Object(l.u)({selector:"todo-item",template:o("1we5")})],t)}(),G=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},X=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},Q=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function s(t){try{a(n.next(t))}catch(t){r(t)}}function c(t){try{a(n.throw(t))}catch(t){r(t)}}function a(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(s,c)}a((n=n.apply(t,e||[])).next())})},Y=this&&this.__generator||function(t,e){var o,n,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(i=n[2&r[0]?"return":r[0]?"throw":"next"])&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[0,i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}},H=function(){function t(t,e){this.todoStore=t,this.route=e,this.isAuth=!1,this.isLoading=!1,this._currentStatus=""}return t.prototype.ngOnInit=function(){return Q(this,void 0,void 0,function(){var t=this;return Y(this,function(e){switch(e.label){case 0:return this.isLoading=!0,[4,f.auth().getRedirectResult()];case 1:return e.sent(),f.auth().currentUser?(this.isAuth=!0,[4,this.todoStore.list()]):[3,4];case 2:return e.sent(),[4,this.route.params.map(function(t){return t.status}).subscribe(function(e){t._currentStatus=e})];case 3:e.sent(),e.label=4;case 4:return this.isLoading=!1,[2]}})})},t.prototype.login=function(){this.todoStore.signIn()},t.prototype.remove=function(t){this.todoStore.remove(t)},t.prototype.update=function(){this.todoStore.persist()},Object.defineProperty(t.prototype,"todos",{get:function(){return"oscars"==this._currentStatus?this.todoStore.oscars:"completed"===this._currentStatus?this.todoStore.completed:"active"===this._currentStatus?this.todoStore.remaining:this.todoStore.allRegular},enumerable:!0,configurable:!0}),t.prototype.allCompleted=function(){return this.todoStore.allCompleted()},t.prototype.setAllTo=function(t){this.todoStore.setAllTo(t.checked)},t=G([Object(l.u)({selector:"todo-list",template:o("lFaM")}),X("design:paramtypes",["function"==typeof(e="undefined"!=typeof g&&g)&&e||Object,"function"==typeof(n="undefined"!=typeof u.a&&u.a)&&n||Object])],t);var e,n}(),J=[{path:"",component:H,pathMatch:"full"},{path:":status",component:H}],$=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},V=function(){function t(){}return t.prototype.transform=function(t,e){return t.trim()},t=$([Object(l._0)({name:"trim"})],t)}(),Z=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},tt=function(){function t(){}return t=Z([Object(l.Q)({bootstrap:[O],declarations:[O,H,j,W,F,V],imports:[s.a,c.a,a.b,u.b.forRoot(J)],providers:[g,N,C]})],t)}();Object(l._27)(),Object(r.a)().bootstrapModule(tt).then()}},[0]);