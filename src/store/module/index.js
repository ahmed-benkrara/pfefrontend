import moduleGetters from './getters'
import moduleMutations from './mutations'
import moduleActions from './actions'

const moduleModule = {
    namespaced : true,
    state : {
        data : null,
        loading : false,
        error : '',
        success : ''
    },
    getters: moduleGetters,
    mutations: moduleMutations,
    actions: moduleActions
}

export default moduleModule