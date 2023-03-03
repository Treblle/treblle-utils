const { test } = require('@japa/runner')
const maskSensitiveValues = require('../../utils/mask-sensitive-values')

test.group('maskSensitiveValues()', () => {
  test('mask payload as expected', ({ assert }) => {
    const maskedPayload = maskSensitiveValues(
      { language: 'JavaScript', header: { authorization: 'Bearer dighaid83giav' } },
      { authorization: true }
    )
    assert.deepEqual(maskedPayload, {
      language: 'JavaScript',
      header: { authorization: 'Bearer *************' },
    })
  })
})
