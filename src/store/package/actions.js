import axios from 'axios'

const packageActions = {
    async getPackages({commit}){
        try{
            commit('setLoading', true)
            const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/packages`, {
                headers : {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                }
            })

            commit('setData', response.data.data)
            commit('setLoading', false)
            commit('setError', '')
            commit('setSuccess', true)
        }catch(err){
            commit('setLoading', false)
            commit('setSuccess', false)
            //status test
            if(err.response){
                if(err.response.status == 500){
                    commit('setError', 'Oops it seems there is a problem with connection !')
                    return
                }else if(err.response.status == 401){
                    commit('setError', 'UnAuthorized !')
                    return
                }
            }
            commit('setError', 'Something went wrong please try again later !')
        }
    }
}

export default packageActions