import authGetters from './getters'
import authMutations from './mutations'
import authActions from './actions'

const authModule = {
    namespaced : true,
    state: {
        login : {
            token : null,
            loading : true,
            error : false,
            message : null
        },
        isTokenValid : false,
        registerErrors : {
            errors : {},
            loading : true,
            success : true
        }
    },
    getters: authGetters,
    mutations: authMutations,
    actions: authActions
}

export default authModule