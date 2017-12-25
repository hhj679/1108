let initData = {
    tabIndex: 0,
    top10Project: [{
        name: 'firehol/netdata',
        y: 25561
    }, {
        name: 'serverless/serverless',
        y: 20448
    },{
        name: 'Kong/kong',
        y: 13107
    },{
        name: 'home-assistant/home-assistant',
        y: 10576
    },{
        name: 'piwik/piwik',
        y: 8376
    },{
        name: 'rwaldron/johnny-five',
        y: 8360
    },{
        name: 'amark/gun',
        y: 6810
    },{
        name: 'Freeboard/freeboard',
        y: 4808
    },{
        name: 'hybridgroup/gobot',
        y: 3643
    },{
        name: 'timescale/timescaledb',
        y: 3228
    }],
    top10Talent: [{
        name: 'firehol',
        y: 2556
    }, {
        name: 'serverless',
        y: 2044
    },{
        name: 'Kong',
        y: 1310
    },{
        name: 'home-assistant',
        y: 1057
    },{
        name: 'piwik',
        y: 837
    },{
        name: 'rwaldron',
        y: 836
    },{
        name: 'amark',
        y: 681
    },{
        name: 'Freeboard',
        y: 480
    },{
        name: 'hybridgroup',
        y: 364
    },{
        name: 'timescale',
        y: 322
    }],
    top10Company: [{
        name: 'firehol.com',
        y: 255
    }, {
        name: 'serverless.com',
        y: 204
    },{
        name: 'Kong.com',
        y: 131
    },{
        name: 'home-assistant.com',
        y: 105
    },{
        name: 'piwik.com',
        y: 83
    },{
        name: 'rwaldron.com',
        y: 83
    },{
        name: 'amark.com',
        y: 68
    },{
        name: 'Freeboard.com',
        y: 48
    },{
        name: 'hybridgroup.com',
        y: 36
    },{
        name: 'timescale.com',
        y: 32
    }]
}

export function software(state = initData, action) {
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