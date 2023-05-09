const authMutations = {
    setToken(state, payload){
        state.login.token = payload
        window.localStorage.setItem('token', payload)
    },
    setLoading(state, payload){
        state.login.loading = payload
    },
    setError(state, payload){
        state.login.error = payload
    },
    setMessage(state, payload){
        state.login.message = payload
    },
    SET_TOKEN(state, payload){
        state.login.token = payload
    },
    setIsTokenValid(state, payload){
        state.isTokenValid = payload
    },
    clearToken(state){
        state.login.token = null
        window.localStorage.removeItem('token')
    },
    setRegisterErrors(state, payload){
        state.registerErrors.errors = payload.errors 
        state.registerErrors.loading = payload.loading
    },
    setRegisterSuccess(state, payload){
        state.registerErrors.success = payload
    }
}

export default authMutations