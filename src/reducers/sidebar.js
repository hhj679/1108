let initData = {
    open: false,
    user: {
        id: 'id',
        name: 'Will Smith',
        avatar: ''
    },
    menus: [{
        text: '首页',
        id: 'home',
        key: 'home'
    }, {
        text: '行业',
        id: 'business',
        key: 'business'
    }, {
        text: '厂商',
        id: 'view_compact',
        key: 'company'
    }, {
        text: '产品',
        id: 'storage',
        key: 'product'
    }, {
        text: '专利',
        id: 'widgets',
        key: 'patent'
    }, {
        text: '软件',
        id: 'album',
        key: 'software'
    }]
}

export function sidebar(state = initData, action) {
    switch (action.type) {
        case 'SIDEBAR_OPEN_TOGGLE':
            let open = !state.open
            if(action.open) {
                open = action.open
            }
            return {
                ...state,   //三个点是展开符
                open
            }
        default:
            return {...state};
    }
}