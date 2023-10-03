const maskValue = require('../private/mask-value')
/**
 * Mask sensitive values in the payload to send to Treblle
 * @description we mask certain fields by default but you can also specify more fields to mask in SDK land
 * @link https://docs.treblle.com/en/security/masked-fields
 * @param {object} payload
 * @param {Record<string, boolean>} fieldsToMask
 * @returns {object}
 */
function maskSensitiveValues(payload, fieldsToMask) {
  if (payload == null || typeof payload == 'undefined') return null
  if (typeof payload !== 'object') return payload

  if (Array.isArray(payload)) {
    return payload.map((val) => maskSensitiveValues(val, fieldsToMask))
  }

  if ('toJSON' in payload) {
    return maskSensitiveValues(payload.toJSON(), fieldsToMask)
  }

  let objectToMask = { ...payload }

  let safeObject = Object.keys(objectToMask).reduce(function (acc, propName) {
    if (typeof objectToMask[propName] === 'string') {
      if (fieldsToMask[propName] === true) {
        acc[propName] = maskValue(objectToMask[propName], propName)
      } else {
        acc[propName] = objectToMask[propName]
      }
    } else if (Array.isArray(objectToMask[propName])) {
      acc[propName] = objectToMask[propName].map((val) => maskSensitiveValues(val, fieldsToMask))
    } else if (typeof objectToMask[propName] === 'object') {
      acc[propName] = maskSensitiveValues(objectToMask[propName], fieldsToMask)
    } else {
      acc[propName] = objectToMask[propName]
    }

    return acc
  }, {})

  return safeObject
}

module.exports = maskSensitiveValues
