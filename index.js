
const express = require('express')
const app = express()
const port = 5000
var cors=require('cors')

const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon is up')
  })

  app.get('/categories', (req,res)=>{
    res.send(categories)
  })
  
  app.listen(port, () => {
    console.log(`Dragon api listening on port ${port}`)
  })