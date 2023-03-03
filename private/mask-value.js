/**
 * Masks a string with (*).
 * @description It will also partially mask a string if it starts with Basic or Bearer
 * @link https://docs.treblle.com/en/security/masked-fields
 * @param {string} valueToMask
 * @param {string} propName
 * @returns {string} maskedString
 */
function maskValue(valueToMask, propName) {
  if (['authorization'].includes(propName.toLowerCase()) && valueToMask.match(/^(bearer|basic)/i)) {
    const [authPrefix, authToken] = valueToMask.split(' ')
    const maskedAuthToken = '*'.repeat(authToken.length)
    maskedValue = `${authPrefix} ${maskedAuthToken}`
    return maskedValue
  }
  return '*'.repeat(valueToMask.length)
}

module.exports = maskValue
