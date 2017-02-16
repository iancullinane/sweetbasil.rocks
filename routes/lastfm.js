

import request from 'request';
import query from 'query-string';

var lastfmUrl = 'http://ws.audioscrobbler.com/2.0/?';

// /2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json
// An object to generate a query string
var options_get_recent = {
  method: "user.getRecentTracks",
  limit: "10",
  user: '<user>',
  api_key: "<key>",
  format: "json"
};

var options_get_artist = {
  method: "artist.getInfo",
  user: '<user>',
  api_key: "<key>",
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

  getArtistByID(id, callback){
    let options = options_get_artist;
    options.mbid = id;
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

  getRecentTracksByPage(page, callback){
    let options = options_get_recent;
    console.log("getting page: " + page);
    options.limit = 10;
    options.page = page;
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
