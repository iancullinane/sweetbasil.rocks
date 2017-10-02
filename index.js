import express from 'express';
import path from 'path';
import moment from 'moment';
import config from './CONFIG';

import route_handler from './routes/router'

var app = express();
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.config = config;
app.locals.moment = moment;



app.use('/', route_handler);

console.log("App server loaded");
console.log('Listening on 8888');
app.listen(8888);
