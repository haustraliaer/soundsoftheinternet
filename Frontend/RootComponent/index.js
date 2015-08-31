import React from 'react'
import style from './style.css'
import taro from 'assets/img/taro-as-art.png'

export default React.createClass({
  render() {
    return (
      <div className={style.root}>
        <h1>hello bp</h1>
        <img src={taro} />
      </div>
    )
  }
})
