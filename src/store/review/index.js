import reviewGetters from './getters'
import reviewMutations from './mutations'
import reviewActions from './actions'

const reviewModule = {
    namespaced : true,
    state : {
        form : {
            fullname : '',
            title : '',
            rate : '',
            email : '',
            message : '' 
        },
        loading : false,
        error : '',
        success : false
    },
    getters: reviewGetters,
    mutations: reviewMutations,
    actions: reviewActions
}

export default reviewModule