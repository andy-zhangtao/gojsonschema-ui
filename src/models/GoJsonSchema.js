import * as netTool from '../services/GoJsonSchema'

export default {

  namespace: 'gojsonschema',

  state: {
    gostruct: ''
  },

  subscriptions: {
    setup ({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * fetch ({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'})
    },
    * translate ({payload}, {call, put}) {
      const gs = yield call(netTool.translate, payload.jmsg, payload.name)
      const gostruct = gs.data.data
      yield put({
        type: 'save',
        payload: {
          gostruct
        }
      })
    },
  },

  reducers: {
    save (state, {payload: {gostruct}}) {
      // console.log(action)
      return {...state, gostruct}
    },
  },

}
