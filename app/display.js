

import test from './templates/test.pug';
import track from './templates/track.pug';
import rawData from './templates/rawData.pug';

/*
  Class to control the display

  Uses pug templates to render display components as needed
*/

class Display{

  drawTrack(obj){
    let displayText = track({track: obj});
    document.getElementById("app")
      .insertAdjacentHTML('beforeend', displayText);
  }
  // Add html for a given id
  test(){
    let displayText = test();
    document.getElementById("app")
      .insertAdjacentHTML('beforeend', displayText);
  }

  printData(data){
    let displayText = rawData({ data: JSON.stringify(data, undefined, 2)});
    console.log(data);
    document.getElementById("app")
      .insertAdjacentHTML('beforeend', displayText);
  }


}

// Export an instance of Display
export let ui = new Display();
