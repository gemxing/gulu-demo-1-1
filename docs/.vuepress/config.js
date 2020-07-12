module.exports = {
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
                    '/components/tabs'
                ]
            }
        ],
        nav: [
            {text: '主页', link:'/'},
            {text: '文档', link: '/guide/'},
            {text: '交流', link: 'https://google.com'},
        ],
    }
  }