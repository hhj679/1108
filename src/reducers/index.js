import { home } from './home'
import { search } from './search'
import { global } from './global'
import { sidebar } from './sidebar'
import { business } from './business'
import { company } from './company'

const rootReducer = {
  /* your reducers */
  home, //首页相关
  search, //搜索相关
  global,
  sidebar,
  business,
  company
}
export default rootReducer
