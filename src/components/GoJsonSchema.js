import React, { Component } from 'react'
import SourceJson from './SourceJson'
import GoStruct from './GoStruct'
import { Col, notification, Row } from 'antd'
import { connect } from 'dva'
import * as jsonToSchema from 'json-schema-generator'

const openNotificationWithIcon = (type, title, msg) => {
  notification[type]({
    message: title,
    description: msg,
  })
}

class GoJsonSchema extends Component {
  constructor (props) {
    super(props)
    this.state = {msg: '', gostruct: '', name: ''}
  }

  transferMsg (msg, name) {
    if (msg.length == 0) {
      openNotificationWithIcon('warning', 'JSON内容错误', 'JSON不得为空')
    } else if (name.length == 0) {
      openNotificationWithIcon('warning', '类名出错', 'GoStruct 类名不得为空')
    } else {
      const jmsg = JSON.stringify(this.convert(msg))
      // console.log(jmsg)
      this.props.dispatch({
        type: 'gojsonschema/translate',
        payload: {
          jmsg,
          name
        },
      })
    }
  }

  convert (msg) {
    try {
      JSON.parse(msg)
      return jsonToSchema.default(JSON.parse(msg))
    } catch (e) {
      openNotificationWithIcon('error', '出错了', 'JSON校验失败,格式不合法. 请先修复JSON数据')
    }
  }

  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col span={22} offset={1}>
            <SourceJson transferMsg={(msg, name) => this.transferMsg(msg, name)}/>
          </Col>
        </Row>
        <div style={{padding: '20px'}}/>
        <Row>
          <Col span={22} offset={1}>
            <GoStruct value={this.props.gostruct}/>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps (state) {
  // console.log('In the mapStateToProps')
  // console.log(state)
  const gostruct = state.gojsonschema.gostruct
  return {
    gostruct
  }
}

export default connect(mapStateToProps)(GoJsonSchema)
