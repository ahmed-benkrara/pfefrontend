const moduleGetters = {
    getData(state){
        return state.data
    },
    getLoading(state){
        return state.loading
    },
    getError(state){
        return state.error
    },
    getSuccess(state){
        return state.success
    },    
    getModuleData(state){
        return state.module.data 
    },
    getModuleLoading(state){
        return state.module.loading 
    },
    getModuleSuccess(state){
        return state.module.success 
    }
}

export default moduleGetters