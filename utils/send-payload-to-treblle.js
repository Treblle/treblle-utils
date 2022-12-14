const fetch = require('node-fetch')
const getTreblleBaseUrl = require('./get-treblle-base-url')

module.exports = function sendPayloadToTreblle(payload, apiKey) {
  fetch(getTreblleBaseUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify(payload),
  }).catch((error) => console.log(error))
}
