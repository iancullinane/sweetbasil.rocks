

import React, { Component } from 'react';


export default class TrackList extends Component {

  constructor(props){
    super(props);
    console.log("Props going into TrackList is : " + this.props);
  }

  render() {
    return (
      <div>{this.props.list}</div>
    )

  }

}
