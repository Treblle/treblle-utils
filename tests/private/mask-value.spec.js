const { test } = require('@japa/runner')

const getMaskedValue = require('../../private/mask-value')

test.group('maskValue', () => {
  test('Mask entire string', ({ assert }) => {
    assert.equal(getMaskedValue('treblle', 'company'), '*******')
  })

  test('Mask entire string even if string starts with Bearer', ({ assert }) => {
    assert.equal(getMaskedValue('Bearer Sails', 'favoriteFramework'), '************')
  })

  test('Mask entire string even if string starts with Basic', ({ assert }) => {
    assert.equal(getMaskedValue('Basic treblle', 'company'), '*************')
  })

  test('Mask partially if string starts with Bearer and propName is authorization', ({
    assert,
  }) => {
    assert.equal(getMaskedValue('Bearer treblle', 'authorization'), 'Bearer *******')
  })

  test('Mask partially if string starts with Basic and propName is authorization', ({ assert }) => {
    assert.equal(getMaskedValue('Basic treblle', 'Authorization'), 'Basic *******')
  })
})
