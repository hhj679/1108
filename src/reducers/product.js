let initData = {
    category: [{
        name: '电视',
        id: 'tv',
        logo: 'tv'
    }, {
        name: '空调',
        id: 'air_conditioning',
        logo: 'credit_card'
    }, {
        name: '洗衣机',
        id: 'washing',
        logo: 'gradient'
    }, {
        name: '冰箱',
        id: 'refrigerator',
        logo: 'style'
    }, {
        name: '厨卫大电',
        id: 'chuwei',
        logo: 'devices_other'
    }, {
        name: '厨房小电',
        id: 'cfxjd',
        logo: 'gamepad'
    }, {
        name: '生活电器',
        id: 'shjd',
        logo: 'wb_incandescent'
    }, {
        name: '个护健康',
        id: 'gehu',
        logo: 'local_hospital'
    }, {
        name: '家庭影音',
        id: 'coll',
        logo: 'audiotrack'
    }, {
        name: '进口电器',
        id: 'import',
        logo: 'directions_boat'
    }]
}

export function product(state = initData, action) {
    switch (action.type) {
        case 'SWIPE_TABS':
            return {
                ...state,   //三个点是展开符
                tabIndex: action.tabIndex
            }
        default:
            return {...state};
    }
}