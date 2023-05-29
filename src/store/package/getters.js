const packageGetters = {
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
    }
}

export default packageGetters