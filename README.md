# treblle-utils

`treblle-utils` exposes common methods(utils), that is needed to build JavaScript SDKs for Treblle.

## Installation

```sh
npm i @treblle/utils --save
```

## Usage

### `sendPayloadToTreblle()`

Sends payload to Treblle.

```js
const { sendPayloadToTreblle } = require('@treblle/utils')

try {
  sendPayloadToTreblle(payload, '<YOUR_TREBLLE_API_KEY>')
} catch (error) {
  console.log(error)
}
```

> You can check out [this](https://github.com/Treblle/treblle-utils/blob/develop/treblle-payload-schema.json) JSON schema for the shape of the payload to send to Treblle.

### `generateFieldsToMask()`

Generates fields to be masked.

```js
const { generateFieldsToMask } = require('@treblle/utils')

const fieldsToMask = generateFieldsToMask(['field1', 'field2'])
```

The `field1` and `field2` placeholder represent additional fields you want masked alongside the [default fields that will be masked](https://docs.treblle.com/en/security/masked-fields)

### `maskSensitiveValues()`

Masks sensitive values in the payload to be sent.

```js
const { maskSensitiveValues } = require('@treblle/utils')

const maskedRequestPayload = maskSensitiveValues(payload, fieldsToMask)
```

### `getRequestDuration()`

Useful in frameworks that don't calculate requests duration.

```js
const { getRequestDuration } = require('@treblle/utils')

const requestStartTime = process.hrtime()

const loadTime = getRequestDuration(requestStartTime)
```

> Check out the [Treblle docs](https://docs.treblle.com) for steps to integrate Treblle in your JavaScript(Node.js) projects.
