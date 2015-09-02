import React from 'react'
import style from './style.css'
import taro from 'assets/img/taro-as-art.png'
import vineManifest from './vineManifest.js'

export default React.createClass({
  render() {
    return (
      <div className={style.root}>
        <script src="https://platform.vine.co/static/scripts/embed.js"></script>
        {this.renderVines()}
      </div>
    )
  },

  renderVines() {
    return vineManifest.map((vine, index) => {
      return (
        <iframe
          key={index}
          src={`https://vine.co/v/${vine.id}/card?audio=1`}
          frameborder="0"
          scrolling="no"
          seamless="seamless"
          webkitallowfullscreen="webkitAllowFullScreen"
          mozallowfullscreen="mozallowfullscreen"
          allowfullscreen="allowfullscreen"
          width="500"
          height="500" />
      )
    })
  },
})
