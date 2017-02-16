

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
  }

  _setTracks(obj){
    this.setState({tracks: obj});
  }

  _getMoreTracks(){
    console.log(this.state)
    this.setState({page: this.state.page + 1});

    lastfm.getRecentTracksByPage(this.state.page, (returned)=>{
      const tracks = returned.recenttracks.track
      let tracksList = _.map(tracks, (obj, i) =>
        <Track track={obj} key={_.uniqueId("track-" + i)}/>
      )

      this._setTracks(tracksList);
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.tracks}</div>
        <button className='btn more-btn' onClick={()=>this._getMoreTracks()}>more</button>
      </div>
    )
  }

}
