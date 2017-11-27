import { home } from './home'
import { search } from './search'
import { global } from './global'
import { sidebar } from './sidebar'
import { business } from './business'

const rootReducer = {
  /* your reducers */
  home, //首页相关
  search, //搜索相关
  global,
  sidebar,
  business
}
export default rootReducer
