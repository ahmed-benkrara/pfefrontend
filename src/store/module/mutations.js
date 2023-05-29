const moduleMutations = {
    setData(state, payload){
        state.data = payload
    },
    setLoading(state, payload){
        state.loading = payload
    },
    setError(state, payload){
        state.error = payload
    },
    setSuccess(state, payload){
        state.success = payload
    }
}

export default moduleMutations