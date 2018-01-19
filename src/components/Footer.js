import React, {Component} from 'react'
import {Row, Col} from 'antd'
class Footer extends Component{
  render(){
    return(
      <Row>
        <Col span={24}>
          <div style={{padding: '20px'}}/>
          © 2018 Json-GoStruct. All rights reserved. ztao8607@gmail.com
        </Col>
      </Row>
    )
  }
}

export default Footer
