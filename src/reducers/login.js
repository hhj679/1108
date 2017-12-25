const initState = {
    isLoggedIn: false, //过渡动画样式
}

export const login = (state = initState, action) => {
    switch (action.type) {
        case "CURRENT_ANIMATE":
            return {
                ...state,
                animateCls: action.cls
            }
        default:
            return state
    }
}