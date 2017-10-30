import React, { Component } from 'react'
import SourceJson from './SourceJson'
import GoStruct from './GoStruct'
import { Col, Row } from 'antd'
import * as netTool from '../services/GoJsonSchema'

class GoJsonSchema extends Component {
  constructor (props) {
    super(props)
    this.state = {msg: '', gostruct: ''}
  }

  transferMsg (msg) {
    // this.setState({
    //   msg
    // })

    // const go = yield call(netTool.translate,msg)
    // console.log(go)
    // this.setState({
    //   msg: go.data
    // })
  }

  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col span={11} offset={1}>
            <SourceJson transferMsg={msg => this.transferMsg(msg)}/>
          </Col>
          <Col span={11}>
            <GoStruct value={this.state.msg}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default GoJsonSchema
