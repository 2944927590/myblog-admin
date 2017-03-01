const nav = [
  {
    name: 'demo',
    text: '演示',
    icon: 'el-icon-message',
    path: '/user',
    children: [
      {
        name: 'user',
        path: '/user',
        icon: 'el-icon-message',
        text: '用户管理',
      }, {
        name: 'editor',
        path: '/editor',
        icon: 'el-icon-message',
        text: '富文本'
      }
    ]
  },
  {
    name: 'a',
    text: '演示',
    icon: 'el-icon-message',
    path: '/user',
    children: [
      {
        name: 'b',
        path: '/user',
        icon: 'el-icon-message',
        text: '用户管理',
      }, {
        name: 'c',
        path: '/editor',
        icon: 'el-icon-message',
        text: '富文本'
      }
    ]
  },
  {
    name: 'd',
    text: '演示',
    icon: 'el-icon-message',
    path: '/user',
    children: [
      {
        name: 'e',
        path: '/user',
        icon: 'el-icon-message',
        text: '用户管理',
      }, {
        name: 'f',
        path: '/editor',
        icon: 'el-icon-message',
        text: '富文本'
      }
    ]
  },
  {
    name: 'g',
    path: '/user',
    icon: 'el-icon-message',
    text: '用户管理',
    children: []
  },
  {
    name: 'h',
    path: '/user',
    icon: 'el-icon-message',
    text: '用户管理',
  },
  {
    name: 'g',
    path: '/user',
    icon: 'el-icon-message',
    text: '用户管理',
    children: []
  },
]
export default nav
