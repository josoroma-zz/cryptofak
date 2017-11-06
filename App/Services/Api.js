// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://api.coindesk.com/v1/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000 // 10 second
  })

  const getCurrentPrice = () => api.get('bpi/currentprice.json')

  // let's return back a interface.
  return {
    getCurrentPrice
  }
}

// let's return back our create method as the default.
export default {
  create
}
