

import React, { Component } from 'react';


export default class TrackList extends Component {

  constructor(props){
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>{this.props.list}</div>
    )

  }

}
