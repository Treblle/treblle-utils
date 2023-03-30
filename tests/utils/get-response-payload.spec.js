const { test } = require('@japa/runner')
const getResponsePayload = require('../../utils/get-response-payload')

test.group('getResponsePayload', () => {
  test('returns a payload object from an object-based response body', ({ assert }) => {
    const { payload } = getResponsePayload(
      { message: 'Hello', secret: 'A secret' },
      { secret: true }
    )
    assert.isObject(payload)
  })

  test('returns a payload object from a buffer-based response body', ({ assert }) => {
    const data = {
      name: 'Kelvin Omereshone',
      email: 'kelvin@example.com',
    }
    const jsonString = JSON.stringify(data)
    const buffer = Buffer.from(jsonString)
    const { payload, error } = getResponsePayload(buffer, { email: true })
    assert.isObject(payload)
    assert.isNull(error)
  })

  test('returns a payload object from a JSON-based response body', ({ assert }) => {
    const data = {
      name: 'Kelvin Omereshone',
      email: 'kelvin@example.com',
    }

    const jsonString = JSON.stringify(data)
    const { payload } = getResponsePayload(jsonString, { email: true })
    assert.isObject(payload)
  })

  test('returns an error object when response body is invalid', ({ assert }) => {
    const { payload, error } = getResponsePayload('Invalid response', { email: true })
    assert.isObject(error)
    assert.isNull(payload)
  })
})
