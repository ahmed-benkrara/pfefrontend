import orderGetters from './getters'
import orderMutations from './mutations'
import orderActions from './actions'

const orderModule = {
    namespaced : true,
    state : {
        success : ''
    },
    getters: orderGetters,
    mutations: orderMutations,
    actions: orderActions
}

export default orderModule