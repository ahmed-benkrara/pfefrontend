import store from '@/store'
const checkout = async () => {
    //check if token is valid
    await store.dispatch('authModule/userRoleByToken')
    const user = store.getters['authModule/getUser']
    if(user != null){
        //auth
        if(user.role.toLowerCase() != 'user'){
            return '/'
        }

        if(store.getters['cartModule/getData'] == null){
            return '/'
        }
    }else{
        return '/login'
    }
}

export default checkout