const os = require('os')
/**
 * Generates payload to send to Treblle
 *
 * @param {import('../treblle-payload').SdkInfo} sdkInfo
 * @param {{ server: import('../treblle-payload').ServerPayload, language?: import('../treblle-payload').LanguagePayload, request: import('../treblle-payload').RequestPayload, response: import('../treblle-payload').ResponsePayload, errors: object[]}} payload
 * @returns {import('../treblle-payload').TrebllePayload}
 */
module.exports = function generateTrebllePayload(
  sdkInfo,
  { server, language, request, response, errors = [] }
) {
  return Object.assign(
    {},
    {},
    {
      ...sdkInfo,
      data: {
        server: Object.assign(
          {},
          {
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            os: {
              name: os.platform(),
              release: os.release(),
              architecture: os.arch(),
            },
            software: null,
            signature: null,
          },
          server
        ),
        language: Object.assign(
          {},
          {
            name: 'node',
            version: process.version,
          },
          language
        ),
        request: Object.assign(
          {},
          {
            timestamp: new Date().toISOString().replace('T', ' ').substr(0, 19),
          },
          request
        ),
        response: Object.assign({}, {}, response),
        errors,
      },
    }
  )
}
