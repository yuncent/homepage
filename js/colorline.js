// createHtml.js

function createHtml() {
  const htmlContent = `
    <table align="center" border="0" width="800px">
      <tr>
        <td align="left" width="100">
          <img src="im/cloud.png" alt="云彩天际" width="30" height="20" style="vertical-align: bottom;">云彩天际
        </td>
        <td align="left">
          <link rel="stylesheet" id="showtime" href="css/showtime.css">
          <div class="showtime"></div>
        </td>
        <td align="right">
          <a href="http://m.yuncent.cn/" target="_blank">手机</a>
          <a href="http://b.yuncent.cn/" target="_blank">论坛</a>
        </td>
      </tr>
    </table>
    <caption>&nbsp;</caption>
    <table width="1024" border="0" align="center">
      <tr>
        <td>
          <div align="left">
            <marquee>
              欢迎进入<font color="#FF0000">云</font><font color="#BF0040">彩</font><font color="#7F0080">天</font><font color="#3F00C0">际</font>个人分享站!
            </marquee>
          </div>
        </td>
      </tr>
    </table>
  `;
  document.body.innerHTML = htmlContent;
  // 将 time.js 移动到末尾
  const script = document.createElement('script');
  script.src = 'js/time.js';
  document.body.appendChild(script);
}

createHtml();