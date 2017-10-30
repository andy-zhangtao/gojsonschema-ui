import React, { Component } from 'react'
import { Input } from 'antd'

const {TextArea} = Input

class Example extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const value = new Buffer(this.props.value, 'base64').toString()
    return (
      <div>
        <TextArea autosize={{minRows: 2, maxRows: 21}} value={value}/>
      </div>
    )
  }
}

export default Example
