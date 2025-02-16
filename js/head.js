// 创建 title 标签并添加到 head
const title = document.createElement('title');
title.textContent = '云彩天际';
document.head.appendChild(title);

// 创建 link 标签并添加到 head
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/x-icon';
link.href = 'im/logo.ico';
document.head.appendChild(link);