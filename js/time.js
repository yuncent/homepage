
var t = null;
t = setTimeout(time, 1000); // 开始运行

function time() {
  clearTimeout(t); // 清除定时器
  dt = new Date();

  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours(); // 获取时
  var m = dt.getMinutes(); // 获取分
  var s = dt.getSeconds(); // 获取秒

  // 获取星期几
  var weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  var weekday = weekDays[dt.getDay()];

  document.querySelector(".showtime").innerHTML =
    y +
    "年" +
    mt +
    "月" +
    day +
    "日 " +
    weekday + // 添加星期
    " " +
    h +
    "时" +
    m +
    "分" +
    s +
    "秒";

  t = setTimeout(time, 1000); // 设定定时器，循环运行
}
