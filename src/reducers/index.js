import { home } from './home'
import { global } from './global'
import { sidebar } from './sidebar'
import { business } from './business'
import { company } from './company'
import { product } from './product'
import { software } from './software'
import { patent } from './patent'
import { login } from './login'

const rootReducer = {
  /* your reducers */
  home, //首页相关
  global,
  sidebar,
  business,
  company,
  product,
  software,
  patent,
  login
}
export default rootReducer
