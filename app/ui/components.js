
import React, { Component } from 'react';
import _ from 'underscore';
import moment from 'moment';


//
// UI Components
//_______________
export class NowPlaying extends Component {
  render(){
    return (
      <div className='current'>Now Playing</div>
    )
  }
}

export class PastTracks extends Component {
  render(){
    return (
      <div className='past'>Past Tracks</div>
    )
  }
}
//
//var img = this.state.showImage ? <MyImage /> : '';
// return (
// <div>{img}<RemoveImageButton clickHandler={this.removeImage} /></div>
// );

export class ArtistInfo extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    return (
      <div className='track--info'>
        <div dangerouslySetInnerHTML={{__html: this.props.bio[1]}} />
      </div>
    )
  }
}

export class Time extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <p>{this.props.time}</p>
    )
  }
}
