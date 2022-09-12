const auth = {
    state: {
        token: '',
    },
    getters: {
        getToken: (state) => state.token,
    },
    mutations: {
        setToken: (state, tok) => {
            state.token = tok;
        },
    },
    actions: {
        setToken: (context, tok) => {
            context.commit("setToken", tok);
        }
    },
};

module.exports = auth;