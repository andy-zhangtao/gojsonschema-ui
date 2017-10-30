import React, { Component } from 'react'
import SourceJson from './SourceJson'
import GoStruct from './GoStruct'
import { Col, Row } from 'antd'
import { connect } from 'dva'
import * as jsonToSchema from 'json-schema-generator'

class GoJsonSchema extends Component {
  constructor (props) {
    super(props)
    this.state = {msg: '', gostruct: ''}
  }

  transferMsg (msg) {
    const jmsg = JSON.stringify(this.convert(msg))
    this.props.dispatch({
      type: 'gojsonschema/translate',
      payload: {
        jmsg
      },
    })
    // this.setState({
    //   msg
    // })

    // const go = yield call(netTool.translate,msg)
    // console.log(go)
    // this.setState({
    //   msg: go.data
    // })
  }

  convert (msg) {
    return jsonToSchema.default(JSON.parse(msg))
  }

  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col span={11} offset={1}>
            <SourceJson transferMsg={msg => this.transferMsg(msg)}/>
          </Col>
          <Col span={11}>
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
