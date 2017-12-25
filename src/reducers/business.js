let initData = {
    tabIndex: 0,
    icepriceLine: [{
        name: '2015',
        y: 23.5
    }, {
        name: '2016',
        y: 25.3
    }, {
        name: '2017',
        y: 25.6
    }],
    airpriceLine: [{
        name: '2015',
        y: 33.5
    }, {
        name: '2016',
        y: 35.3
    }, {
        name: '2017',
        y: 35.6
    }],
    tvpriceLine: [{
        name: '2015',
        y: 45.7
    }, {
        name: '2016',
        y: 46.3
    }, {
        name: '2017',
        y: 46.6
    }],
    washerpriceLine: [{
        name: '2015',
        y: 13.2
    }, {
        name: '2016',
        y: 14.3
    }, {
        name: '2017',
        y: 15.6
    }],
    iceCompanyMarket: [{
        name: '美的',
        y: 15.8
    }, {
        name: '格力',
        y: 8.9
    }, {
        name: '三星',
        y: 16.6
    }, {
        name: '西门子',
        y: 18.2
    }],
    tvCompanyMarket: [{
        name: '美的',
        y: 3.2
    }, {
        name: '格力',
        y: 1.1
    }, {
        name: '三星',
        y: 30.6
    }, {
        name: '西门子',
        y: 1.0
    }],
    airCompanyMarket: [{
        name: '美的',
        y: 25.8
    }, {
        name: '格力',
        y: 18.9
    }, {
        name: '三星',
        y: 1.6
    }, {
        name: '西门子',
        y: 48.2
    }],
    washerCompanyMarket: [{
        name: '美的',
        y: 5.2
    }, {
        name: '格力',
        y: 1.9
    }, {
        name: '三星',
        y: 26.6
    }, {
        name: '西门子',
        y: 28.2
    }]
}

export function business(state = initData, action) {
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