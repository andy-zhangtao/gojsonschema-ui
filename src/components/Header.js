import React, {Component} from 'react'
import {Row, Col} from 'antd'
class Header extends Component{
  render(){
    return (
      <div>
        <Row>
          <Col span={24}>
            <img alt='json2gostruct' src={require('../assets/json2gostruct.svg')}/>
          </Col>
        </Row>
        <div style={{padding: '20px'}} />
      </div>
    )
  }
}

export default Header
