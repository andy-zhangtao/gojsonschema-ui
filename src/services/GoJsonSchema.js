import request from '../utils/request'

export function translate (jsons, name) {
  const base64Jsons = new Buffer(jsons).toString('base64')
  let values = {
    name: name,
    json: base64Jsons
  }
  // console.log(JSON.stringify(values))

  return request('http://127.0.0.1:8080/v1/post/json', {
    method: 'POST',
    body: JSON.stringify(values)
  })
}
