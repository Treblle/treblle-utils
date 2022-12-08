module.exports = function generateFieldsToMask(additionalFieldsToMask = []) {
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
