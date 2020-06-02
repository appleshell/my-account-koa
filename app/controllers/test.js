const https = require('https')
const axios = require('axios')

// personal api key: YEDT80X4O75WIFFI

const getData = async (ctx, next) => {
  const req = ctx.request.query
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

module.exports = {
  getData
}