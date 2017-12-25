/**
 * Created by Administrator on 2016/7/2.
 */

let priceLine = [], saleLine = [], feedbackLine = [];
let currentDate = new Date();
let lastHalfYearDate = new Date();
lastHalfYearDate = lastHalfYearDate.setMonth(currentDate.getMonth()-3);
while( currentDate > lastHalfYearDate) {
    priceLine.push({
        name: currentDate.getTime(),
        y: Math.ceil(Math.random()*100)
    });
    // saleLine.push({
    //     name: currentDate.getTime(),
    //     y: Math.ceil(Math.random()*100)
    // });
    // feedbackLine.push({
    //     name: currentDate.getTime(),
    //     y: Math.ceil(Math.random()*100)
    // });
    currentDate.setDate(currentDate.getDate()-1);
}


// 初始化状态
let initNavList = {
    navMain: [],
    bookDetails: [],
    priceLine: priceLine
}

export function home(state = initNavList, action) {
    switch (action.type) {
        case 'RECEIVE_NAV':
            return {
                ...state,   //三个点是展开符
                navMain: action.navMain
            }
        case 'RECEIVE_BOOK':
            return {
                ...state,
                bookDetails: action.bookDetails
            }
        default:
            return {...state};
    }
}