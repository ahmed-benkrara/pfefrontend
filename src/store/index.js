import { createStore } from 'vuex'
// import authModule from './auth/index'
import axios from 'axios'

export default createStore({
  state: {
    token : '',
    data : null
  },
  getters:{
    getData : state => state.data
  },
  mutations: {

  },
  actions: {
    async fetchData({state}){
      try{
        const x = await axios.get('http://127.0.0.1:8000/api/packages', {
          headers: {
            'Authorization': `Bearer 3|W4Qz4Vzo2dixjtrS2UehjT20LVnYi6y7Rfb2SHn4`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
          },
        })
        state.data = x
        //commit('setData', x)
        //console.log(JSON.parse(JSON.stringify(state.data)))
      }catch(err){
        console.log(err)
      }
    }
  },
  modules: {
    // authModule
  }
})
