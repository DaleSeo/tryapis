import superagent from 'superagent'

export default class ApiCaller {

  call (req, callback) {
    return superagent('POST', 'https://call-api.herokuapp.com')
      .send(req)
      .end((err, res) => {
        if (err) return callback(err)
        let response = {
          statusCode: res.statusCode,
          statusText: res.statusText,
          headers: res.header,
          body: res.body,
          text: res.text
        }
        callback(null, response)
      })
  }

}
