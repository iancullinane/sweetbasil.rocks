

import React, { Component } from 'react';
import _ from 'underscore';
import {lastfm} from '../routes/lastfm';
import Track from './track.js';


export default class TrackList extends Component {

  constructor(props){
    super(props);
    this.state = {
      page: 1,
      tracks: this.props.list,
    }
    //console.log("Rendering page: " + this.state.page);
  }

  _setTracks(toAppend){
    const newTracks = _.union(this.state.tracks, toAppend)
    this.setState({tracks: newTracks});
  }

  _incrementPage(){
    this.setState({page: this.state.page + 1}, this._getMoreTracks);
  }

  _getMoreTracks(){
    lastfm.getRecentTracksByPage(this.state.page, (returned)=>{
      let moreTracks = returned.recenttracks.track;
      moreTracks.splice(0,1);
      const tracks =  _.map(moreTracks, (obj, i) =>
        <Track track={obj} key={_.uniqueId("track-" + i)}/>
      )
      this._setTracks(tracks);
    });
  }

  render() {
    return (
      <div>
        <div id="trackRiver">{this.state.tracks}</div>
        <button className='btn more-btn' onClick={()=>this._incrementPage()}>more tracks</button>
        <div className='space'></div>
        {/*<div className='btn more-btn'>{this.state.page}</div>}
        {<button className='btn more-btn' onClick={()=>this._incrementPage()}>+</button>*/}

      </div>
    )
  }

}
