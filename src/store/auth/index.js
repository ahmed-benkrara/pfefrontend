import authGetters from './getters'
import authMutations from './mutations'
import authActions from './actions'

const authModule = {
    namespaced : true,
    state: {
        token : ''
    },
    getters: authGetters,
    mutations: authMutations,
    actions: authActions
}

export default authModule