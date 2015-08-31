
module.exports = function(mixin) {
  return {
    'white-space': 'pre',           /* CSS 2.0 */
    'white-space': 'pre-wrap',      /* CSS 2.1 */
    'white-space': 'pre-line',      /* CSS 3.0 */
    'white-space': '-pre-wrap',     /* Opera 4-6 */
    'white-space': '-o-pre-wrap',   /* Opera 7 */
    'white-space': '-moz-pre-wrap', /* Mozilla */
    'white-space': '-hp-pre-wrap',  /* HP Printers */
    'word-wrap': 'break-word',      /* IE 5+ */
  }
}