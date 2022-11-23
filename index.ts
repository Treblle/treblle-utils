import fetch from 'node-fetch'

const generateFieldsToMask = (additionalFieldsToMask: string[] = []) => {
  const defaultFieldsToMask = [
    'password',
    'pwd',
    'secret',
    'password_confirmation',
    'passwordConfirmation',
    'cc',
    'card_number',
    'cardNumber',
    'ccv',
    'ssn',
    'credit_score',
    'creditScore',
  ]
  const fields = [...defaultFieldsToMask, ...additionalFieldsToMask]
  const fieldsToMask = fields.reduce((acc, field) => {
    acc[field] = true
    return acc
  }, {})
  return fieldsToMask
}

const maskSensitiveValues = (payload, fieldsToMask) => {
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

const getRequestDuration = (startTime): number => {
  const NS_PER_SEC = 1e9
  const NS_TO_MICRO = 1e3
  const diff = process.hrtime(startTime)
  const microseconds = (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MICRO
  return Math.ceil(microseconds)
}

export { fetch, generateFieldsToMask, maskSensitiveValues, getRequestDuration }
