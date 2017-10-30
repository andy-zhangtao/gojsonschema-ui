import React, { Component } from 'react'
import { Button, Col, Input } from 'antd'

const {TextArea} = Input

/**
 * Json输入源
 */
class SourceJson extends Component {
  constructor (props) {
    super(props)
    this.state = {value: '', name: ''}
    this.handleBtnOnClick = this.handleBtnOnClick.bind(this)
  }

  onInputChange = (e) => {
    const {value} = e.target
    this.setState({value})
  }

  onNameInputChange = (e) => {
    const {value} = e.target
    this.setState({name: value})
  }

  handleBtnOnClick () {
    this.props.transferMsg(this.state.value, this.state.name)
  }

  render () {
    return (
      <div>
        <TextArea
          placeholder="这里输入JSON"
          autosize={{minRows: 2, maxRows: 19}}
          onChange={this.onInputChange}
        />
        <div style={{padding: '5px'}}/>
        <Col span={11}>
          <Input placeholder="这里输入Gostruct 类名" onChange={this.onNameInputChange}/>
        </Col>
        <Button type="primary" size="large" icon="sync" onClick={this.handleBtnOnClick}>试试手气</Button>
      </div>
    )
  }
}

export default SourceJson
