const SETUSER = 'SETUSER'
const LOGOUT = 'LOGOUT'

const defaultState = {
    currentUser: {},
    isAuth: false,
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SETUSER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false,
            }
        default:
            return state
    }
}

export const setUser = (user) => ({type: SETUSER, payload: user})
export const logout = () => ({type: LOGOUT})
