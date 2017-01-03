
import express from 'express';
import {lastfm} from './lastfm';

// the Router subclass to be exported
var router = express.Router();


router.use((req, res, next)=>{
  lastfm.getRecentTracks((data, err) => {
    if (err) { return next(err); };
    res.data = data;
    next();
    //res.render('index', {data: data});
  });
});

router.get('/', (req, res, next)=>{
  console.log(res.statusCode);
  res.render('index', {data: res.data});
});

router.get('/test', (req, res)=>{
  res.send("from routed")
});

module.exports = router;
