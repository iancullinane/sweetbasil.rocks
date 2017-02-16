
/*
	Vendor Imports
*/
import $ from 'jquery';
import jQuery from 'jquery';
import pug from 'pug';
import _ from 'underscore';
import React    from 'react';
import ReactDOM from 'react-dom';
/*
	App imports
*/
import {ui} from './display.js';

/*
	Set up window for DOM manipulation and bootstrap
	TODO possibly remove completely, use templates and native DOM calls
*/
window.$ = $;
window.jQuery = jQuery;
var bootstrap = require('bootstrap');      // not compatible with ES6 use legacy

// Sanity Check
//console.log(window.location.pathname);

/*
	Application variables
*/
//console.log(data);
/*
  Handle js for a given route
*/
if(window.location.pathname === '/'){
  //console.log("/route")
  index();
} else if(window.location.pathname === '/config') {
  //console.log("/config route")
  index();
}

/*
  React components?
*/
import Track from './track.js';
import TrackList from './trackList.js';


var count = 0;

function index(){
  const tracks = data.recenttracks.track
  let tracksList = _.map(tracks, (obj, i) =>
    <Track track={obj} key={_.uniqueId("track-" + i)}/>
  )

  const listTest = <TrackList list={tracksList}/>
  ReactDOM.render(
    listTest,
    document.getElementById('app2')
  );

};

function someClick(){
  console.log("Some click")
}


/*
 	Redraw when a resize is complete
*/
var resizeId;
$(window).resize(function() {
  console.log("Fire delayed page resize script")
});
