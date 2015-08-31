module.exports = function(mixin, width, height, display) {
  return {
    'position': 'relative',
    'z-index': 1,
    'display': display,
    'width': width,
    'height': height,

    'svg': {
      'position': 'absolute',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'width': width,
      'height': height,
    },
  }
}

