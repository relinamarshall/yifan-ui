export default {
    // 控制首页显示的版本号
    version: 'v0.0.1',
    // 侧边栏搜索的时候顶部展示的文案
    logo: 'YIFAN',
    // 配置主键,目前用于存储
    key: 'yifan',
    title: '快速开发框架',
    indexTitle: '快速开发框架',
    // 是否开启验证码校验
    validateCode: true,
    // 是否开启注册
    register: true,
    // 用户名密码登录的 client 信息
    formLoginClient: 'yifan:yifan',
    // 验证码登录的 client 信息
    smsLoginClient: 'app:app',
    // token 剩余多少毫秒执行刷新
    remainingTime: 1800000,
    // 配置无权限可以访问的页面
    whiteList: ['/login', '/404', '/401', '/lock'],
    // 配置不添加tags页面 （'/advanced-router/mutative-detail/*'——*为通配符）
    whiteTagList: ['/login', '/404', '/401', '/lock'],
    lockPage: '/lock',
    tokenTime: 6000,
    statusWhiteList: [428],
    // 配置首页不可关闭
    isFirstPage: false,
    setting: {
        sidebar: 'vertical',
        tag: true,
        debug: true,
        collapse: true,
        search: true,
        lock: true,
        fullscren: true,
        theme: true,
        menu: true
    },
    fistPage: {
        label: '首页',
        value: '/wel/index',
        params: {},
        query: {},
        meta: {
            i18n: 'dashboard'
        },
        close: false
    },
    // 配置菜单的属性
    menu: {
        iconDefault: 'iconfont icon-caidan',
        label: 'label',
        path: 'path',
        icon: 'icon',
        children: 'children',
        query: 'query',
        href: 'href',
        meta: 'meta'
    }
}
