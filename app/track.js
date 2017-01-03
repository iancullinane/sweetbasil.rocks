

import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';
import {lastfm} from '../routes/lastfm';

export default class Track extends Component {

  // Inherit from component
  constructor(props){
    super(props);
    // Set the initial state from the props object
    this.state = {
      nowPlaying: this._isPlaying(this.props.track),
      track: this.props.track.name,
      artist: this.props.track.artist['#text'],
      played: this._getTime(this.props.track),
      image: this._getImage(this.props.track)
    }
  }

  _getTime(track){
    if(track.date){
      return moment.unix(track.date['uts']).fromNow();
    }
  }

  _isPlaying(track){
    if(track["@attr"]){
      return true;
    }
  }

  _test(){
    console.log("Button clicked");
  }

  _playingClass(){
    if(this.state.nowPlaying){
      return "nowPlaying";
    }
  }

  _artist_info_toggle(){
    lastfm.getArtistByID((returned)=>{
      console.log(returned);
      if (!this.state.artist_more){
        this.setState({artist_more: returned.artist.bio.summary});
      } else {
        this.setState({artist_more: ""});
      }
    })
    //console.log(lastfm.getArtistByID());
    //this.state.track.name = "Something";
  }

  _getImage(track) {
    if(track.image[3]['#text']){
      return track.image[3]['#text']
    } else {
      return "http://placekitten.com/g/170/170"
    }
  }

  // go here for why i did the arrow funciotn on the button:
  // http://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method/35748912#35748912

  render() {

    let nowPlaying = (
      <div className='current'>Now Playing</div>
    )
    let pastTracks = (
      <div className='past'>Past Tracks</div>
    )
    let time;
    if(!this.state.nowPlaying){
      time = <h4 className='track--time'>{this.state.played}</h4>
    }

    let trackTemplate = (
      <section className='track'>
        <div className={'track--image ' + this._playingClass()}>
          <img src={this.state.image} />
        </div>
        <div className='track--info'>
          <h2 className='track--title'>{this.state.track}</h2>
          <h3 className='track--artist'>{this.state.artist}</h3>
          {time}
          <p>{this.state.artist_more}</p>
        </div>
        <button className='btn btn-track' onClick={()=>this._artist_info_toggle()}>Artist Info</button>
      </section>
    )

    let returnValue;
    if(this.state.nowPlaying){
      returnValue = (
        <div>
          {nowPlaying}
          {trackTemplate}
          {pastTracks}
        </div>
      )
    } else {
      returnValue = (
        <div>
          {trackTemplate}
        </div>
      )
    }

    return (
      <div>
        {returnValue}
      </div>
    )

  }

}
