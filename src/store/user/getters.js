const userGetters = {
    getUsers(state){
        return state.data
    },
    getUser(state){
        return state.user.data
    },
    getUserSuccess(state){
        return state.user.success
    },
    getSuccess(state){
        return state.success
    }
}

export default userGetters