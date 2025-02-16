const beianHtml = `
  <div class="beian">
    <a href="https://beian.miit.gov.cn" target="_blank">浙ICP备2023002487号</a>
  </div>
`;

// 将 HTML 插入到页面底部
document.body.insertAdjacentHTML('beforeend', beianHtml);

// 动态创建并插入样式
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
  /* 定义基础样式 */
  .beian a {
    text-decoration: none; /* 移除默认下划线 */
    color: #000; /* 默认文字颜色为黑色 */
    font-size: 16px; /* 设置字体大小 */
    display: inline-block; /* 确保可以应用 transform */
    transition: transform 0.3s ease, color 0.3s ease; /* 平滑过渡效果 */
  }

  /* 鼠标悬停时的效果 */
  .beian a:hover {
    color: blue; /* 改变文字颜色为蓝色 */
    transform: scale(1.2); /* 放大 1.2 倍 */
  }

  /* 备案信息布局 */
  .beian {
    text-align: center; /* 居中显示 */
    margin-top: 7.5em; /* 与正文隔开 5 行（假设每行高度为 1.5em） */
  }
`;
document.head.appendChild(styleSheet);