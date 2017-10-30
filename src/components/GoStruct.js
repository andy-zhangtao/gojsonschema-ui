import React, { Component } from 'react'
import * as jsonToSchema from 'json-schema-generator'
import { Input } from 'antd'

const {TextArea} = Input

// const json = '{"widget": {\n' +
//   '    "debug": "on",\n' +
//   '    "window": {\n' +
//   '        "title": "Sample Konfabulator Widget",\n' +
//   '        "name": "main_window",\n' +
//   '        "width": 500,\n' +
//   '        "height": 500\n' +
//   '    },\n' +
//   '    "image": { \n' +
//   '        "src": "Images/Sun.png",\n' +
//   '        "name": "sun1",\n' +
//   '        "hOffset": 250,\n' +
//   '        "vOffset": 250,\n' +
//   '        "alignment": "center"\n' +
//   '    },\n' +
//   '    "text": {\n' +
//   '        "data": "Click Here",\n' +
//   '        "size": 36,\n' +
//   '        "style": "bold",\n' +
//   '        "name": "text1",\n' +
//   '        "hOffset": 250,\n' +
//   '        "vOffset": 100,\n' +
//   '        "alignment": "center",\n' +
//   '        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"\n' +
//   '    }\n' +
//   '}}'
//
class Example extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let jsons = this.props.value == "" ? "{}" : this.props.value
    let textArea
    try {
      JSON.parse(jsons)
      textArea = <TextArea autosize={{minRows: 2, maxRows: 20}}  value={JSON.stringify(jsonToSchema.default(JSON.parse(jsons)), null, 4)}/>
    }catch(e){
      console.log(e)
      textArea = <TextArea autosize={{minRows: 2, maxRows: 20}} value={jsons + ' 不是合法JSON格式, 无法解析'}/>
    }finally {
      console.log(textArea)
      return(
        <div>
          {textArea}
        </div>
      )
    }

  }
}

export default Example
