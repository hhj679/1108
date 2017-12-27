// const queryString = require('query-string');
// import * as queryString from 'query-string'

const initState = {
    isLoggedIn: false, 
    loginError: '',
    token: '',
    // redirect: '/home'
}

export const login = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":
            // const hash = location.hash.replace('#/login/');
            // const redirect = hash.redirect?decodeURIComponent(hash.redirect):'/home'
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                loginError: action.error?action.error:'',
                token: action.token?action.token:'',
                // redirect: redirect
            }
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false, 
                loginError: '',
                token: ''
            }
        default:
            return state
    }
}