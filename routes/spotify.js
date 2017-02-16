

import request from 'request';
import query from 'query-string';


var spotifyUrl = 'https://api.spotify.com/v1/?';

// /2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json
// An object to generate a query string
var options = {
  method: "search",
};


class SpotifyAPI{

  buildUrl(q){
    //q.page = page;
    return spotifyUrl + query.stringify(q);
  };

  getFromSpotify(){
    return this.buildUrl(options);
  }
}

export let spotify = new SpotifyAPI();
