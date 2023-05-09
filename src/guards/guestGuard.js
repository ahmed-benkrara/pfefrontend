import store from '@/store'
const guest = async () => {
    //check if token is valid
    await store.dispatch('authModule/userRoleByToken')
    if(store.getters['authModule/getIsTokenValid']){
        //auth
        return '/'
    }
}

export default guest