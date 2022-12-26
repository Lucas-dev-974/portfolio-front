export default{
    state: {
        on_page: 'project' 
    },

    mutations: {
        dashGotToPage(state, page_name){ state.dash.on_page = page_name; }
    }
}