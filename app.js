const express = require('express');
const bodyParser = require('body-parser')
const app  = express();
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening to ${port}`)
})
// static files
app.use(express.static('public'))
app.use('/public', express.static(__dirname + 'public'))

//view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))


const newsRouter = require('./src/routes/news');
app.use('/', newsRouter);



