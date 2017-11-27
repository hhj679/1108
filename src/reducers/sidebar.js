let initData = {
    open: false,
    user: {
        id: 'id',
        name: 'Will Smith',
        avatar: ''
    },
    menus: [{
        text: '首页',
        id: 'home'
    }, {
        text: '行业',
        id: 'business'
    }, {
        text: '厂商',
        id: 'view_compact'
    }, {
        text: '产品',
        id: 'storage'
    }, {
        text: '专利',
        id: 'widgets'
    }, {
        text: '软件',
        id: 'album'
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