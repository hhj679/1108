let initData = {
    companys: [{
        name: '美的集团',
        en: 'Midea',
        full: '美的集团股份有限公司',
        id: 'midea',
        logo: 'https://cdn.itjuzi.com/images/60b2c0f3d7a886ae260b8e2b0bb5bee7.jpg?imageView2/0/w/58/q/100',
        foundDate: '2000.4',
        description: '“美的”是一家以家电制造业为主的大型综合性企业集团，主要产品是家居电器等，旗下拥有美的、小天鹅、威灵、华凌、安得、美芝等十余个品牌。'
    }, {
        name: '格力电器',
        en: 'Gree',
        full: '珠海格力电器股份有限公司',
        id: 'gree',
        logo: 'http://tva4.sinaimg.cn/crop.136.128.900.900.50/6d314616gw1exgo0y1m6nj20wh0wh0vl.jpg',
        foundDate: '1991.11',
        description: '珠海格力电器股份有限公司，简称格力、格力电器，是中国大陆和世界最大的集研发、生产、销售、服务于一体的空调企业，“格力”品牌号称占全球市场占有率首位。公司在1989年于广东珠海成立，前身是珠海市海利冷气工程股份有限公司。1991年，公司改组成“珠海格力电器股份有限公司”。'
    }, {
        name: '西门子',
        en: 'Siemens',
        full: '西门子（中国）有限公司',
        id: 'siemens',
        logo: 'https://cdn.itjuzi.com/images/f3a6aa358c6fe44dbe373e1f0b40fef9.png?imageView2/0/w/100/q/100',
        foundDate: '1994.10',
        description: '西门子是资源节约型技术供应商，专注于电气化、自动化和数字化领域的发展，致力于提供输电解决方案、基础设施解决方案和软件解决方案以及咨询服务。'
    }, {
        name: '三星集团',
        en: 'Samsung',
        full: '三星集团',
        id: 'samsung',
        logo: 'http://img.technews.tw/wp-content/uploads/2013/12/samsung-logo-624x209.png',
        foundDate: '1938 .3',
        description: '三星集团，总部位于韩国首尔的国际跨国公司，亦是韩国最大的财阀。三星集团的经营领域涵盖电子、金融业、保险、生物制药、建设、化工业、医疗、航空零件、军火制造、服装、酒店、汽车等等。'
    }]
}

export function company(state = initData, action) {
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