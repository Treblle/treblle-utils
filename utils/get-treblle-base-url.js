/**
 * Returns Treblle API base URL
 * @returns {string}
 */
module.exports = function getTreblleBaseUrl() {
  const treblleBaseUrls = [
    'https://rocknrolla.treblle.com',
    'https://punisher.treblle.com',
    'https://sicario.treblle.com',
  ]
  const randomUrlIndex = Math.floor(Math.random() * treblleBaseUrls.length)

  return treblleBaseUrls[randomUrlIndex]
}
