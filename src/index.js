import dva from 'dva'
import { createBrowserHistory } from 'history'
import router from './router'
import appModal from './model'

const app = dva({
  history: createBrowserHistory(),
})
app.model(appModal)

app.router(router)
app.start('#root')
