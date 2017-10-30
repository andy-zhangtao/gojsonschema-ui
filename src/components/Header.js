import React, { Component } from 'react'
import { Col, Row } from 'antd'

class Header extends Component {
  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col span={24}>
            <img alt='json2gostruct' src={require('../assets/json2gostruct.svg')}/>
          </Col>
          <Col span={1} push={10}>
            <a href='https://github.com/andy-zhangtao/gojsonschema'>
              <img alt='github' src='https://img.shields.io/github/forks/andy-zhangtao/gojsonschema.svg?style=social'/>
            </a>
          </Col>
          <Col span={1} push={11}>
            <a href='https://github.com/andy-zhangtao/gojsonschema'>
              <img alt='issue' src='https://img.shields.io/github/issues/andy-zhangtao/gojsonschema.svg?style=social'/>
            </a>
          </Col>

        </Row>
        <div style={{padding: '20px'}}/>
      </div>
    )
  }
}

export default Header
