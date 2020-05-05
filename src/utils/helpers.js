/**
 * return the id of the tweet from a tweet url
 * @param {string} url
 */
export function extractTweetId(url) {
  return url.split('/').pop();
}

/**
 * Format the datetime string
 * @param {string} datetimeString
 */
export function formatDateTime(datetimeString) {
  const strArr = datetimeString.split(' ');
  return `${strArr[5]} ${strArr[1]} ${strArr[2]} ${strArr[0]} ${strArr[3]}`;
}
