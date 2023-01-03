import { getRandom } from './tools'
// 配置节日
const getHoliday = () => {
  const dayArr = ['newYear', 'halloween', '']
  const random = getRandom(1, dayArr.length)
  return random
}
// 获取两日期之间的日期列表
const getRangeDate = (stime, etime) => {
  // 初始化日期列表，数组
  let diffdate = [];
  let i = 0;
  // 开始日期小于等于结束日期,并循环
  while (stime <= etime) {
    let date = new Date(stime);
    // 获取开始日期时间戳
    let stimeTs = date.getTime();

    // 增加一天时间戳后的日期
    let nextDate = stimeTs + (24 * 60 * 60 * 1000);

    // 拼接年月日，这里的月份会返回（0-11），所以要+1
    let nextDatesY = new Date(nextDate).getFullYear() + '-';
    let nextDatesM = (new Date(nextDate).getMonth() + 1 < 10) ? '0' + (new Date(nextDate).getMonth() + 1) + '-' : (new Date(nextDate).getMonth() + 1) + '-';
    let nextDatesD = (new Date(nextDate).getDate() < 10) ? '0' + new Date(nextDate).getDate() : new Date(nextDate).getDate();

    // 获取星期
    let week = date.getDay();
    stime = nextDatesY + nextDatesM + nextDatesD;
    diffdate[i] = { date: stime, week, month: nextDatesY + nextDatesM };

    // 增加数组key
    i++;
  }
  return diffdate;
}
export {
  getRangeDate,
  getHoliday
}