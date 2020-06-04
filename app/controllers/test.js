const https = require('https')
const axios = require('axios')
const flatted = require('flatted')

// personal api key: YEDT80X4O75WIFFI

const getData = async (ctx, next) => {
  const req = ctx.request.query
  const { symbol, interval = 5 } = req
  let resData = null
  let message = ''
  let code = 000 
  if (symbol) {
    const res = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}min&apikey=YEDT80X4O75WIFFI`)
    resData = res.data
    message = '查询成功'
  } else {
    code = 100
    message = 'symbol不能为空'
  }
  ctx.status = 200
  ctx.body = {
    data: resData,
    code,
    message,
  }
  // console.log(resData.data)
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