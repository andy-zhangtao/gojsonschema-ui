import dva from 'dva'
import './index.css'
import { message } from 'antd'

const ERROR_MSG_DURATION = 3 // 3 秒

// 1. Initialize
const app = dva({
  onError (e) {
    message.error(e.message, ERROR_MSG_DURATION)
  },
})

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/GoJsonSchema'));

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root')
