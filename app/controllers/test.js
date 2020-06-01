const https = require('https')

const getData = async (ctx, next) => {
  const req = ctx.request.query
  const resData = {}
  await https.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo', res => {
    // console.log(res)
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
        resData = parsedData
  
        ctx.status = 200
        ctx.body = {
          data: parsedData,
          code: 000,
          message: 'success'
        }
      } catch (e) {
        console.error(e.message);
      }
    });
  })
}

module.exports = {
  getData
}