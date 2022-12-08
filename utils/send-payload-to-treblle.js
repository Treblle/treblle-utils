const fetch = require('node-fetch')
const getTreblleBaseUrl = require('./get-treblle-base-url')
const validateTrebllePayload = require('./validate-treblle-payload')

module.exports = function sendPayloadToTreblle(payload, apiKey) {
  validateTrebllePayload(payload)

  fetch(getTreblleBaseUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify(payload),
  }).catch((error) => console.log(error))
}
