const getRequestDuration = require('./utils/get-request-duration')
const generateFieldsToMask = require('./utils/generate-fields-to-mask')
const sendPayloadToTreblle = require('./utils/send-payload-to-treblle')
const maskSensitiveValues = require('./utils/mask-sensitive-values')

module.exports = {
  sendPayloadToTreblle,
  generateFieldsToMask,
  maskSensitiveValues,
  getRequestDuration,
}
