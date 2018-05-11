const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const proxy = express()
const URL = 'http://gymia-shorty.herokuapp.com/'
const HEADERS = {'Content-Type': 'application/json'}
proxy.use(bodyParser.urlencoded({extended: true}))
proxy.use(bodyParser.json())

const router = express.Router()

router.route('/shorten').post((req, res) => {
  let _url = req.body.url
  fetch(URL +`/shorten`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ 'url': _url })
  })
    .then(response => response.json())
    .then(data => res.json(data))
    .catch((error) => res.json(error))
})

router.route('/:shortcode/stats').get((req, res) => {
  let _shortcode = req.params.shortcode
  fetch(`${URL}${_shortcode}/stats`)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch((error) => {
      console.error(`e-${URL}${_shortcode}/stats`, error)
      res.json(error)
    })
})

proxy.use('/', router)

proxy.listen(3001, () => {
  console.log(`Proxy on port 3001...`)
})
