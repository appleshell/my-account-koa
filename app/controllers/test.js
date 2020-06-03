const https = require('https')
const axios = require('axios')
const flatted = require('flatted')

// personal api key: YEDT80X4O75WIFFI

const getData = async (ctx, next) => {
  const req = ctx.request.query
  console.log(req)
  const resData = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
  const { data } = resData
  // console.log(resData.data)
  ctx.status = 200
  ctx.body = {
    data,
    code: 000,
    message: 'success'
  }
}

const getCompany = async (ctx, next) => {
  const resData = await axios.get('http://nasdaqtrader.com/dynamic/SymDir/nasdaqlisted.txt')
  
  console.log(flatted.stringify(resData))
  ctx.status = 200
  ctx.body = {
    data: flatted.stringify(resData),
    code: 000,
    message: 'success'
  }
}

module.exports = {
  getData,
  getCompany
}