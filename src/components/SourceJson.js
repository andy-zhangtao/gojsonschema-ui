import React, { Component } from 'react'
import { Button, Input } from 'antd'

const {TextArea} = Input

/**
 * Json输入源
 */
class SourceJson extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleBtnOnClick = this.handleBtnOnClick.bind(this)
  }

  onInputChange = (e) => {
    const { value } = e.target;
    this.setState({value})
  }

  handleBtnOnClick () {
    this.props.transferMsg(this.state.value)
  }

  render () {
    return (
      <div>
        <TextArea
          placeholder="这里输入JSON"
          autosize={{minRows: 2, maxRows: 19}}
          onChange={this.onInputChange}
        />
        <div style={{padding: '5px'}} />
        <Button  type="primary" size="large" icon="sync" onClick={this.handleBtnOnClick}>转换</Button>
      </div>
    )
  }
}

export default SourceJson
