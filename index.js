const getRequestDuration = require('./utils/get-request-duration')
const generateFieldsToMask = require('./utils/generate-fields-to-mask')
const sendPayloadToTreblle = require('./utils/send-payload-to-treblle')
const maskSensitiveValues = require('./utils/mask-sensitive-values')
const generateTrebllePayload = require('./utils/generate-treblle-payload')

module.exports = {
  sendPayloadToTreblle,
  generateFieldsToMask,
  maskSensitiveValues,
  getRequestDuration,
  generateTrebllePayload,
}
