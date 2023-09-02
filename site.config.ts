import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: "Krishna.github.io",
  lang: 'zh-CN',
  title: '黑天想成为偶像',
  subtitle: 'All at sea.',
  description: '希望能成为一个有趣的人',
  author: {
    name: '黑天君',
    avatar: '/images/phott.jpg',
    status: {
      emoji: '😀',
    },
  },
 
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
        {
      name: 'GitHub',
      link: 'https://github.com/KrishnaAMV',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
         {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=362596542',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
        {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/18887335',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
         {
      name: 'E-Mail',
      link: '834841537@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
