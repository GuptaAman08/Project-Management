const initState = {
    login_status: null
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case 'LOGIN_ERROR':
            console.log('Login Failed');
            return {
                ...state,
                login_status: 'Login Failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return {
                ...state,
                login_status: null
            }

        case 'LOGOUT_SUCCESS':
            console.log('signout Success');
            return state

        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return{
                ...state,
                login_status: null
            }
            
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return{
                ...state,
                login_status: action.err.message
            }   
        
        default:
            return state
    }
}

export default authReducer;