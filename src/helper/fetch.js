const BaseUrl = process.env.REACT_APP_API_URL
const fetchSinToken = (endpoint, data, method = 'GET') => {
  const url = `${BaseUrl}/${endpoint}` //localhost:4000/api/
  if (method === 'GET') {
    return fetch(url)
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
}

const fetchConToken = (endpoint, data, method = 'GET') => {
  const url = `${BaseUrl}/${endpoint}` //localhost:4000/api/
  const token = localStorage.getItem('token') || ''
  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        Authorization: token,
      },
    })
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    })
  }
}
export { fetchConToken, fetchSinToken }
// if (data.get('excel')) {
//   return fetch(url, {
//     method,
//     headers: {
//       Authorization: token,
//     },
//     body: data,
//   })
// }
