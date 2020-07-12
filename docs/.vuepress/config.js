module.exports = {
    base: '/gulu-demo-1-1-test/',
    title: 'gulu UI',
    description: '一个简单好用的框架',
    themeConfig: {
        sidebar: [
            {
                title:'入门',
                collapadble:false,
                children:[
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title:'组件',
                children:[
                    '/components/button',
                    '/components/input',
                    '/components/tabs',
                    '/components/layout'
                ]
            }
        ],
        nav: [
            {text: '主页', link:'/'},
            {text: '文档', link: '/install/'},
            {text: '交流', link: 'https://github.com/gemxing'},
        ],
    }
  }