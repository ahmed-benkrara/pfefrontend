import { createStore } from 'vuex'
import authModule from './auth/index'
import contactModule from './contact/index'

export default createStore({
  modules: {
    authModule, contactModule
  }
})
