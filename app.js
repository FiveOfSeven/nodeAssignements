const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const rootRoute = require('./routes/root');
const usersRoute = require('./routes/users');

app.use(usersRoute.router);
app.use(rootRoute);

app.listen(3000, () => console.log('app is running on port 3000'));