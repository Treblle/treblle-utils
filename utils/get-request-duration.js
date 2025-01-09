/**
 * Returns request duration
 * @param {[number, number]} startTime
 * @returns {number}
 */
module.exports = function getRequestDuration(startTime) {
  const NS_PER_SEC = 1e9
  const NS_TO_MICRO = 1e3
  const diff = process.hrtime(startTime)
  const microseconds = (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MICRO
  return microseconds
}
