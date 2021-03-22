const express = require('express')
const app = express()

const Router = require('./Router.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/Vinhos', Router)

app.listen(3000, () => {
  console.log(`Servidor Rodando -> http://localhost:${3000}`)
})