(function addStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    .video-container {
      text-align: center;      /* 水平居中 */
      width: 100%;             /* 占据父容器的宽度 */
      max-width: 1024px;       /* 最大宽度限制 */
      margin: 0 auto;          /* 页面水平居中 */
      padding: 0;              /* 移除内边距 */
    }

    .video-wrapper {
      display: inline-block;   /* 让 .video-wrapper 成为行内块级元素 */
      width: 480px;            /* 保持原宽度 */
      height: 309px;           /* 保持原高度 */
      position: relative;      /* 用于定位子元素 */
    }

    .video-wrapper video {
      width: 100%;             /* 视频宽度占满父容器 */
      height: 100%;            /* 视频高度占满父容器 */
      display: block;
      mix-blend-mode: screen;
    }

    .video-wrapper a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
    }
  `;
  document.head.appendChild(style);
})();

// 动态生成视频容器并插入到指定位置
document.addEventListener('DOMContentLoaded', function () {
  // 创建视频容器
  const videoContainer = document.createElement('div');
  videoContainer.className = 'video-container';

  // 创建视频包装器
  const videoWrapper = document.createElement('div');
  videoWrapper.className = 'video-wrapper';

  // 创建超链接
  const link = document.createElement('a');
  link.href = 'https://www.sxso.cn/';

  // 创建视频元素
  const video = document.createElement('video');
  video.src = 'im/helloworld.mp4'; // 确保此路径正确
  video.title = '欢迎进入云彩天际网站';
  video.autoplay = true;
  video.muted = true;
  video.loop = true;

  // 禁用视频右键菜单
  video.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  // 组装结构
  link.appendChild(video);
  videoWrapper.appendChild(link);
  videoContainer.appendChild(videoWrapper);

  // 找到 <script src="js/seek.js"></script> 元素
  const targetScript = Array.from(document.scripts).find(script => script.src.includes('js/seek.js'));

  if (targetScript) {
    // 将视频容器插入到 <script src="js/seek.js"></script> 元素之前
    targetScript.parentNode.insertBefore(videoContainer, targetScript);
  } else {
    // 如果没有找到目标脚本，则将视频容器添加到 body 的末尾
    document.body.appendChild(videoContainer);
  }
});
