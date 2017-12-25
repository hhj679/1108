let priceLine = [], saleLine = [], feedbackLine = [];
let currentDate = new Date();
let lastHalfYearDate = new Date();
lastHalfYearDate = lastHalfYearDate.setMonth(currentDate.getMonth()-3);
while( currentDate > lastHalfYearDate) {
    priceLine.push({
        name: currentDate.getTime(),
        y: Math.ceil(Math.random()*100)
    });
    saleLine.push({
        name: currentDate.getTime(),
        y: Math.ceil(Math.random()*100)
    });
    feedbackLine.push({
        name: currentDate.getTime(),
        y: Math.ceil(Math.random()*100)
    });
    currentDate.setDate(currentDate.getDate()-1);
}

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
    }],
    products: [{
        id: '123',
        name: 'RSJ-15/190RDN3-C',
        img: 'http://img13.360buyimg.com/n4/jfs/t2770/91/3255955437/117856/ce33fb62/57875984Ndcf14ed5.jpg',
        company: '美的'
    }, {
        id: '124',
        name: 'BCD-439WTPM(E)',
        img: 'http://img14.360buyimg.com/n7/jfs/t10480/178/2515082092/222153/d1638457/59f81727N622de50e.jpg',
        company: '美的'
    }, {
        id: '125',
        name: 'RSJ-15/190RDN3-C',
        img: 'http://img13.360buyimg.com/n4/jfs/t2770/91/3255955437/117856/ce33fb62/57875984Ndcf14ed5.jpg',
        company: '美的'
    }, {
        id: '126',
        name: 'BCD-439WTPM(E)',
        img: 'http://img14.360buyimg.com/n7/jfs/t10480/178/2515082092/222153/d1638457/59f81727N622de50e.jpg',
        company: '美的'
    }, {
        id: '127',
        name: 'RSJ-15/190RDN3-C',
        img: 'http://img13.360buyimg.com/n4/jfs/t2770/91/3255955437/117856/ce33fb62/57875984Ndcf14ed5.jpg',
        company: '美的'
    }, {
        id: '128',
        name: 'BCD-439WTPM(E)',
        img: 'http://img14.360buyimg.com/n7/jfs/t10480/178/2515082092/222153/d1638457/59f81727N622de50e.jpg',
        company: '美的'
    }, {
        id: '129',
        name: 'RSJ-15/190RDN3-C',
        img: 'http://img13.360buyimg.com/n4/jfs/t2770/91/3255955437/117856/ce33fb62/57875984Ndcf14ed5.jpg',
        company: '美的'
    }, {
        id: '130',
        name: 'BCD-439WTPM(E)',
        img: 'http://img14.360buyimg.com/n7/jfs/t10480/178/2515082092/222153/d1638457/59f81727N622de50e.jpg',
        company: '美的'
    }],
    competitivers: [
        {
        id: '128',
        name: 'BCD-439WTPM(E)',
        img: 'http://img14.360buyimg.com/n7/jfs/t10480/178/2515082092/222153/d1638457/59f81727N622de50e.jpg',
        company: '美的',
        price: 1899
    }, {
        id: '129',
        name: 'RSJ-15/190RDN3-C',
        img: 'http://img13.360buyimg.com/n4/jfs/t2770/91/3255955437/117856/ce33fb62/57875984Ndcf14ed5.jpg',
        company: '美的',
        price: 1999
    }, {
        id: '130',
        name: 'BCD-439WTPM(E)',
        img: 'http://img14.360buyimg.com/n7/jfs/t10480/178/2515082092/222153/d1638457/59f81727N622de50e.jpg',
        company: '美的',
        price: 1799
    }],
    productParam: {
        header: ['规格', ''],
        data: {
            columns: ['key', 'value'],
            data: [{
                key: '品牌',
                value: '西门子'
            }, {
                key: '商品名称',
                value: '西门子WM10N1C80W'
            }, {
                key: '商品毛重',
                value: '72.0kg'
            }, {
                key: '商品产地',
                value: '中国'
            }, {
                key: '特色推荐',
                value: '筒自洁'
            }, {
                key: '产品类型',
                value: '滚筒'
            }, {
                key: '电机类型',
                value: '变频（节能）'
            }]
        }
    },
    priceLine: priceLine,
    saleLine: saleLine,
    feedbackLine: feedbackLine,
    goodfeedback: [{
        name: '好评',
        y: 99.2
    }, {
        name: '差评',
        y: 0.8
    }],
    goodtopic: [{
        name: '外观',
        y: 56.8
    }, {
        name: '物流',
        y: 30.3
    }, {
        name: '省电',
        y: 6.7
    }, {
        name: '安静',
        y: 5.2
    }],
    topicanls: [{
        name: '外观',
        y: 56.8
    }, {
        name: '物流',
        y: 30.3
    }, {
        name: '省电',
        y: 6.7
    }, {
        name: '安静',
        y: 5.2
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