const Koa = require('koa')
const config = require('./config')
const bodypaParse = require('koa-bodyparser')
const mongoose = require('mongoose')

const test_router = require('./routes/test')

const app = new Koa()

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if(err) {
    console.log('Failed to connect database')
  } else {
    console.log('Connecting database successfully')
  }
})

app.use(bodypaParse())

app.use(test_router.routes())

app.listen(config.port)
console.log(`Server is listening at ${config.port}...`)