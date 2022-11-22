import store from "./store"

export default {
    serveur_host: store.state.backend_host,

    default_options(method, params){
        let token = store.state.token ?? ''
        const parameters = JSON.stringify(params)
        
        return {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`,
            },
            body: parameters,
        }
    },

    async post(uri, params){
        return await window.fetch(this.serveur_host + uri, this.default_options('POST', params))
    },

    async get(uri, params){
        return await window.fetch(this.serveur_host + uri, this.default_options('GET', params))
    },

    async delete(uri, params){
        return await fetch(this.serveur_host + uri, this.default_options('DELETE', params))
    }

}