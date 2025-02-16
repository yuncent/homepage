// js/time.js

function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
}

function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dayOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()];
    const hours = addLeadingZero(now.getHours());
    const minutes = addLeadingZero(now.getMinutes());
    const seconds = addLeadingZero(now.getSeconds());

    const timeString = `${year}年${month}月${date}日 ${dayOfWeek} ${hours}时${minutes}分${seconds}秒`;
    const showTimeElement = document.querySelector('.showtime');

    if (showTimeElement) {
        showTimeElement.textContent = timeString;
    } else {
        console.error('找不到 .showtime 元素');
    }
}

// 初始更新和定时器设置
updateTime();
setInterval(updateTime, 1000);