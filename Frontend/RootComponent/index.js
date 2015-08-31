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
          src={`https://vine.co/v/${vine.id}/embed/simple?audio=1`}
          width="300"
          height="300"
          frameborder="0" />
      )
    })
  },
})
