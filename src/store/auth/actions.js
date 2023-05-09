import axios from 'axios'
//process.env.VUE_APP_BASE_URL

const authActions = {
    async login({commit}, payload){
        try{

            const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/login`, payload, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                }
            })
            commit('setToken', response.data.data.token)
            commit('setLoading', false)
            commit('setError', false)
            commit('setMessage', '')
        }catch(err){
            commit('setLoading', false)
            commit('setError', true)
            if(err.response.status == 401){
                //email or password wrong
                commit('setMessage', 'Invalid email or password !')
            }else{
                commit('setMessage', 'Something went wrong please try again later.')
            }
        }
    },
    tokenFromLocalStorage({commit}){
        const token = window.localStorage.getItem('token')
        if(token){
            commit('SET_TOKEN', token)
        }
    },
    async userRoleByToken({getters, commit}){
        try{
            await axios.get(`${process.env.VUE_APP_BASE_URL}/user`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${getters.getToken}`,
                }
            })
            commit('setIsTokenValid', true)
        }catch(err){
            commit('setIsTokenValid', false)
            commit('clearToken')
        }
    },
    async register({commit}, payload){
        try{
            commit('setRegisterErrors',{errors : {}, loading : true})
            await axios.post(`${process.env.VUE_APP_BASE_URL}/register`, payload, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                }
            })

            commit('setRegisterErrors',{errors : {}, loading : false})
            commit('setRegisterSuccess',true)
        }catch(err){
            let keys = [
                'fname', 'lname', 'email', 'password'
            ]
            let errors = {}
            keys.forEach((key) => {
                if(err.response.data.data[key]){
                    errors[key] = err.response.data.data[key][0]
                }
            })
            let registerErrors = {
                errors,
                loading : false
            }
            commit('setRegisterErrors', registerErrors)
            commit('setRegisterSuccess', false)
        }
    }
}

export default authActions