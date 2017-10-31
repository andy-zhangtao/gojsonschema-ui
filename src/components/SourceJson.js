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
        <Col span={24}>
          <p>
            此工具基于Json Draft-4 开发,因为Draft-4规范对`"key":["value]`的定义是OBjectArray. 因此生成的Golang Struct也会当做Object
            Array处理.请在生成的Golang Struct中
          </p>
          <p>
            确认转换是否成功. 如果此工具节省了您的时间提高了工作效率，请点击star。 如果发现转换错误，请提交issue.
          </p>
          <div style={{padding: '15px'}}/>
        </Col>

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
