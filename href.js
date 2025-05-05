function createWebsiteTable() {
  const table = document.createElement('table');
  table.style.width = '888px';
  table.style.border = '0';
  table.style.margin = '0 auto';
  table.style.textAlign = 'center';

  const headerRow = table.insertRow();
  const headerCell = headerRow.insertCell();
  headerCell.colSpan = 7;
  headerCell.innerHTML = '&nbsp;';

  const titleRow = table.insertRow();
  const titleCell = titleRow.insertCell();
  titleCell.style.textAlign = 'center';
  titleCell.innerHTML = '<span style="color: red; font-size: 18px;">分享网站</span>';

  for (let i = 0; i < 5; i++) {
    titleRow.insertCell(); // Add empty cells
  }

  const moreCell = titleRow.insertCell();
  moreCell.style.textAlign = 'left';
  moreCell.innerHTML = '<a href="https://www.google.com/" target="_blank" style="font-size: 16px;">更多</a>';

  const categories = [
    {
      name: '门户',
      links: [
        { text: '东方财富', href: 'https://www.eastmoney.com/' },
        { text: '新浪', href: 'https://www.sina.com.cn/' },
        { text: '网易', href: 'https://www.163.com/' },
        { text: '搜狐', href: 'https://www.sohu.com/' },
        { text: '腾讯', href: 'https://www.qq.com/' },
        { text: '谷歌', href: 'https://www.google.com/' },
      ],
    },
    {
      name: '系统',
      links: [
        { text: '微软下载', href: 'https://hellowindows.cn/' },
        { text: '菜鸟教程', href: 'https://www.runoob.com/' },
        { text: '无忧启动', href: 'http://bbs.wuyou.net/' },
        { text: '吾爱破解', href: 'https://www.52pojie.cn/' },
        { text: '远景论坛', href: 'https://bbs.pcbeta.com/' },
        { text: '卡饭论坛', href: 'https://bbs.kafan.cn/' },
      ],
    },
    {
      name: '网络',
      links: [
        { text: '腾讯云', href: 'https://cloud.tencent.com/' },
        { text: '阿里云', href: 'https://www.aliyun.com/' },
        { text: '亿速云', href: 'https://www.yisu.com/' },
        { text: '蓝奏网盘', href: 'https://www.lanzou.com/' },
        { text: '虫洞中转', href: 'https://wormhole.app/' },
        { text: '阿里网盘', href: 'https://www.aliyundrive.com/' },
      ],
    },
    {
      name: '游戏',
      links: [
        { text: '17173', href: 'https://www.17173.com/' },
        { text: '游侠网', href: 'https://www.ali213.net/' },
        { text: '游民星空', href: 'https://www.gamersky.com/' },
        { text: 'NGA论坛', href: 'https://bbs.nga.cn/' },
        { text: 'IT之家', href: 'https://www.ithome.com/' },
        { text: '蓝点网', href: 'https://www.landiannews.com/' },
      ],
    },
    {
      name: '娱乐',
      links: [
        { text: '斗鱼直播', href: 'https://www.douyu.com/' },
        { text: '虎牙直播', href: 'https://www.huya.com/' },
        { text: '抖音', href: 'https://www.douyin.com/' },
        { text: '哔哩BiLi', href: 'https://www.bilibili.com/' },
        { text: '虎扑NBA', href: 'https://nba.hupu.com/' },
        { text: '直播吧', href: 'https://www.zhibo8.cc/' },
      ],
    },
    {
      name: '购物',
      links: [
        { text: '淘宝网', href: 'https://www.taobao.com/' },
        { text: '京东商城', href: 'https://www.jd.com/' },
        { text: '苏宁易购', href: 'https://www.suning.com/' },
        { text: '易车网', href: 'https://www.yiche.com/' },
        { text: '汽车之家', href: 'https://www.autohome.com.cn' },
        { text: '太平洋汽车', href: 'https://www.pcauto.com.cn/' },
      ],
    },
    {
      name: 'AI',
      links: [
        { text: '通义千问', href: 'https://tongyi.aliyun.com/' },
        { text: '腾讯元宝', href: 'https://yuanbao.tencent.com/' },
        { text: 'OpenAI', href: 'https://openai.com/' },
        { text: 'DeepSeek', href: 'https://www.deepseek.com/' },
        { text: 'Gemini', href: 'https://gemini.google.com/' },
        { text: 'Ollama', href: 'https://ollama.com/' },
      ],
    },            
  ];

  categories.forEach((category) => {
    const row = table.insertRow();
    row.style.textAlign = 'left';

    const categoryCell = row.insertCell();
    categoryCell.style.textAlign = 'center';
    categoryCell.innerHTML = `<font color="blue">${category.name}</font>`;

    category.links.forEach((link) => {
      const linkCell = row.insertCell();
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.target = '_blank';
      anchor.textContent = link.text;
      linkCell.appendChild(anchor);
    });
  });

  return table;
}

// Example usage:
const websiteTable = createWebsiteTable();
document.body.appendChild(websiteTable);