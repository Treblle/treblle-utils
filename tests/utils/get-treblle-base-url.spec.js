const { test } = require('@japa/runner')
const getTreblleBaseUrl = require('../../utils/get-treblle-base-url')

test.group('getTreblleBaseUrl', () => {
  test('return a string', ({ assert }) => {
    assert.isString(getTreblleBaseUrl())
  })
  test('is a valid Treblle base URL', ({ assert }) => {
    const validTreblleBaseUrls = [
      'https://rocknrolla.treblle.com',
      'https://punisher.treblle.com',
      'https://sicario.treblle.com',
    ]
    assert.include(validTreblleBaseUrls, getTreblleBaseUrl())
  })
})
