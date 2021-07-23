const axios = require('axios')
const express = require('express')
const newsRouter = express.Router()
// const NewsAPI = require('newsapi')

newsRouter.get('/', async (req, res) => {
  res.render('news', {title: 'Home'})
})


newsRouter.post('', async (req, res) => {
  let search = req.body.search;
  try {
    const newsAPI = await axios.get(`https://newscatcher.p.rapidapi.com/v1/search_free?q=${search}&lang=en&media=True`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "5cf25132e5msh07ce895df09bd96p1fb02ajsn623ba5792950",
        "x-rapidapi-host": "newscatcher.p.rapidapi.com"
      }
    })
    res.render('search', { displays: newsAPI.data.articles});
  } catch (err) {
    if (err) {
      console.log(err)
    }
  }
})

// newsRouter.get("/:id", async (req, res) => {
//   let articleID = req.params.id;
//   try {
//     const newsAPI = await axios.get(`https://newscatcher.p.rapidapi.com/v1/${articleID}`, {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-key": "5cf25132e5msh07ce895df09bd96p1fb02ajsn623ba5792950",
//         "x-rapidapi-host": "newscatcher.p.rapidapi.com"
//       }
//     })
//     res.render('newsSingle', { article: newsAPI.data.articles});
//   } catch (err) {
//     if (err) {
//       console.log(err)
//     }
//   }
// })






// https://newsapi.org/v2/everything?q=Apple&from=2021-06-21&sortBy=popularity&apiKey=API_KEY

module.exports = newsRouter
