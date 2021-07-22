const axios = require('axios')
const express = require('express')
const newsRouter = express.Router()
// const NewsAPI = require('newsapi')

newsRouter.get('/', async (req, res) => {
  res.render('news')
})


newsRouter.post('', async (req, res) => {
  let search = req.body.search;
  try {
    const newsAPI = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_6137db87e4324aa5f2425f746c8d62af46c&q=${search}`)
    res.render('search', { displays: newsAPI.data.results})
  } catch (err) {
    if (err) {
      console.log(err)
    }
  }
})






// https://newsapi.org/v2/everything?q=Apple&from=2021-06-21&sortBy=popularity&apiKey=API_KEY

module.exports = newsRouter
