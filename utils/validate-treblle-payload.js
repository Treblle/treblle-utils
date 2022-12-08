const Validator = require('jsonschema').Validator
const v = new Validator()
const trebllePayloadSchema = require('../treblle-payload-schema.json')

/**
 *
 * @param {object} payload
 */
module.exports = function validateTrebllePayload(payload) {
  const response = v.validate(payload, trebllePayloadSchema)
  if (response.valid) return response.valid

  const payloadError = new Error('Invalid Treblle payload')
  payloadError.message = 'Verify that the Treblle payload you are sending is valid.'
  payloadError.validationErrors = response.errors

  throw payloadError
}
