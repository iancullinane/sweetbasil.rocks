


import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';

// Custom imports
import {lastfm} from '../routes/lastfm';
import {spotify} from '../routes/spotify';

// UI imports
import {
  NowPlaying,
  PastTracks,
  ArtistInfo,
  Time} from './ui/components.js';

//
// Track Object
//______________
class Track extends Component {

  // Inherit from component
  constructor(props){
    super(props);
    this.state = {
      nowPlaying: this.props.track["@attr"] ? true : null,
      track: this.props.track.name,
      artist: this.props.track.artist['#text'],
      played: this._getTime(this.props.track),
      image: this._getImage(this.props.track),
    }
  }


  _artist_info_toggle(){
    lastfm.getArtistByID(this.props.track.artist.mbid, (returned)=>{
     if(!this.state.artist_more){
       this.setState({artist_more: [this.props.track.artist['#text'], returned.artist.bio.summary] });
     } else {
       this.setState({artist_more: ""});
     }
   })
   //console.log(lastfm.getArtistByID());
   //this.state.track.name = "Something";
  }

  _spotify_info_toggle(){
    console.log(spotify.getFromSpotify());
  }

  _getImage(track) {
    if(track.image[3]['#text']){
      return track.image[3]['#text']
    } else {
      return "/images/cassette_tape_pixel.png"
    }
  }

  _getTime(track){
    if(track.date){
      return moment.unix(track.date['uts']).fromNow();
    }
  }

  // go here for why i did the arrow funciotn on the button:
  // http://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method/35748912#35748912

  render() {


    return (
      <div>
        {this.state.nowPlaying ? <NowPlaying /> : null }
        <section className='track'>
          <div className={this.props.track["@attr"] ? 'track--image nowPlaying' : "track--image"}>
            <img src={this.state.image} />
          </div>
          <div className='track--info'>
            <h2 className='track--title'>{this.state.track}</h2>
            <h3 className='track--artist'>{this.state.artist}</h3>
            <Time time={this.state.played}/>
            {this.state.artist_more ? <ArtistInfo bio={this.state.artist_more} /> : ""}
          </div>
          <div className='track--btns'>
            <button className='btn btn-track' onClick={()=>this._artist_info_toggle()}>Artist Info</button>
            {/* <button className='btn btn-track' onClick={()=>this._spotify_info_toggle()}>Something</button> */}
          </div>
        </section>
        {this.state.nowPlaying ? <PastTracks /> : null }
      </div>
    )


  }

}

module.exports = Track;
