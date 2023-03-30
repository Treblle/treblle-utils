const maskSensitiveValues = require('./mask-sensitive-values')

/**
 * Returns masked response body payload
 * @param {(Object | Buffer | string)} responseBody
 * @param {Object} fieldsToMask
 * @returns {{payload: Object | null, error: Object | null}} result
 */
module.exports = function getResponsePayload(responseBody, fieldsToMask) {
  let originalResponseBody = responseBody
  let payload = null
  let error = null
  try {
    if (Buffer.isBuffer(originalResponseBody)) {
      originalResponseBody = originalResponseBody.toString('utf8')
    }
    if (typeof originalResponseBody === 'string') {
      let parsedResponseBody = JSON.parse(originalResponseBody)
      payload = maskSensitiveValues(parsedResponseBody, fieldsToMask)
    } else if (typeof originalResponseBody === 'object') {
      payload = maskSensitiveValues(originalResponseBody, fieldsToMask)
    }
  } catch (e) {
    // if we can't parse the body we'll leave it empty and set an error
    error = {
      source: 'onShutdown',
      type: 'INVALID_JSON',
      message: 'Invalid JSON format',
      file: null,
      line: null,
    }
  }
  return {
    payload,
    error,
  }
}
