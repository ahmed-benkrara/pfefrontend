import { createStore } from 'vuex'
import authModule from './auth/index'
import contactModule from './contact/index'
import moduleModule from './module/index'
import packageModule from './package/index'
import cartModule from './cart/index'

export default createStore({
  modules: {
    authModule, contactModule, moduleModule, packageModule, cartModule
  }
})
