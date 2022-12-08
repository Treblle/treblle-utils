module.exports = function maskSensitiveValues(payload, fieldsToMask) {
  if (typeof payload !== 'object') return payload
  if (Array.isArray(payload)) {
    return payload.map((val) => maskSensitiveValues(val, fieldsToMask))
  }

  let objectToMask = { ...payload }

  let safeObject = Object.keys(objectToMask).reduce(function (acc, propName) {
    if (typeof objectToMask[propName] === 'string') {
      if (fieldsToMask[propName] === true) {
        acc[propName] = '*'.repeat(objectToMask[propName].length)
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
