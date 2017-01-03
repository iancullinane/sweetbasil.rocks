

import request from 'request';
import query from 'query-string'

var lastfmUrl = 'http://ws.audioscrobbler.com/2.0/?';

// /2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json
// An object to generate a query string
var options_get_recent = {
  method: "user.getRecentTracks",
  limit: "10",
  user: 'ianpants',
  api_key: "57ee3318536b23ee81d6b27e36997cde",
  format: "json"
};

var options_get_artist = {
  method: "artist.getInfo",
  user: 'ianpants',
  api_key: "57ee3318536b23ee81d6b27e36997cde",
  mbid: "cb69e1f1-bc76-4df5-93c9-cf97dd8a3b5c",
  format: "json"

};

class LastFmAPI{

  buildUrl(q){
    //q.page = page;
    return lastfmUrl + query.stringify(q);
  };

  test(){
    console.log("test");
  }

  getArtistByID(callback){
    let options = options_get_artist;
    request(this.buildUrl(options), (err, res, body) => {
      if (!err && res.statusCode == 200) {
        let r_value = JSON.parse(res.body);
        callback(r_value, err);
      } else {
        callback("No Data", "Error")
      };
    });
  }

  getRecentTracks(callback){
    let options = options_get_recent;
    options.limit = 10;
    options.method = "user.getRecentTracks";
    request(this.buildUrl(options), (err, res, body) => {
      if (!err && res.statusCode == 200) {
        let r_value = JSON.parse(res.body);
        callback(r_value, err);
      } else {
        callback("No Data", "Error")
      };
    });
  }

  // Get the recent tracks from lastfm

}

export let lastfm = new LastFmAPI();
