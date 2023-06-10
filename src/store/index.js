import { createStore } from 'vuex'
import authModule from './auth/index'
import contactModule from './contact/index'
import moduleModule from './module/index'
import packageModule from './package/index'
import cartModule from './cart/index'
import reviewModule from './review/index'
import favoriteModule from './favorite/index'
import orderModule from './order/index'
import userModule from './user/index'

export default createStore({
  modules: {
    authModule, 
    contactModule, 
    moduleModule, 
    packageModule, 
    cartModule, 
    reviewModule, 
    favoriteModule, 
    orderModule,
    userModule
  }
})
