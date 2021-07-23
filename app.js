const express = require('express');
const bodyParser = require('body-parser')
const app  = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan')
app.listen(port, () => {
    console.log(`Listening to ${port}`)
})
// static files
app.use(express.static('public'))
app.use('/public', express.static(__dirname + 'public'));
app.use(morgan('dev'));

//view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))


const newsRouter = require('./src/routes/news');
app.use('/', newsRouter);
app.use('/article', newsRouter);



