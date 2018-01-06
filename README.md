# Movie list
## Simple movie list based on todomvc app

### Oscars 2018
 - dedicated and self contained "Oscars 2018" list
    - track Oscars movies that you watched
    - completed movies stay exclusively on Oscars list
    - other lists do not show your Oscars movie list items

### Features
 - Use firebase real time database (WSS) and google sign in
 - Write down movie names as your personal movie todo list
 - Add movies by pasting links from websites like IMDb
     - Supports IMDb links: http://www.imdb.com/title/{movie_id}/ (check set up section)
     - Supports YTS.ag (ex YIFY) links: https://yts.ag/movie/{movie_name}

### Set up
 - Be sure to edit firebase.config.sample.ts file with your firebase project credentials
 - If you wish to use OMDb API services to support IMDb links do following:
    - request your OMDb API key at http://www.omdbapi.com/apikey.aspx
    - copy API key from your email to src/keys.json
    - enjoy! :wink:

Use it as you please,
Cheers
