<template>
  <div class="contribution">
    <div class="title">
      <span>年视图</span>
      <a-dropdown :trigger="['click']">
        <a class="changeColor" @click="e => e.preventDefault()">更换颜色</a>
        <a-menu slot="overlay">
          <a-menu-item
            v-for="(item, index) in dateColor"
            :key="index"
            @click="changeColorHandle(item)"
          >{{ item.label }}</a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <div class="box-main">
      <div class="box-week">
        <div
          v-for="(item, index) in week"
          :key="index"
          v-show="index === 0 || index === 3 || index === 6"
        >{{ item }}</div>
      </div>
      <div class="box-container">
        <div
          :class="['box', !item ? 'stub' : getBoxColor(item)]"
          v-for="(item, index) in dateList"
          :key="index"
          :title="item.date"
          v-tooltip="{ content: item.date, color: '#40485b', bgColor: 'white', pos: 'top' }"
        >
          <div class="month" v-if="item.monthName">{{ item.monthName }}月</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRangeDate } from "@/utils/date"
import { getRangeRandom } from "@/utils/tools"
const dateColor = localStorage.getItem("dateColor") || "default"
export default {
  data() {
    return {
      week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      dateColor: [{
        label: "默认色",
        value: 'default'
      }, {
        label: "红色",
        value: 'red'
      }, {
        label: "黄色",
        value: 'yellow'
      }, {
        label: "蓝色",
        value: 'blue'
      }, {
        label: "粉色",
        value: 'pink'
      }],
      dateColorValue: dateColor,
      month: [],
      dateList: [],
      startDate: '2020-11-24',
      endDate: '2021-11-24'
    }
  },
  mounted() {
    const dateRange = getRangeDate(this.startDate, this.endDate)
    console.log(dateRange)
    const emptyCount = this.getEmptyDateCount(dateRange[0])
    const emptyArray = new Array(emptyCount).fill("")

    const rangeRandom1 = getRangeRandom(20, 0, 100)
    const rangeRandom2 = getRangeRandom(20, 100, 150)
    const rangeRandom3 = getRangeRandom(20, 150, 200)
    const rangeRandom4 = getRangeRandom(20, 200, 365)
    rangeRandom1.forEach(i => {
      let target = dateRange.find((item, index) => index === i)
      if (target) {
        target.count = 4
      }
    })
    rangeRandom2.forEach(i => {
      let target = dateRange.find((item, index) => index === i)
      if (target) {
        target.count = 2
      }
    })
    rangeRandom3.forEach(i => {
      let target = dateRange.find((item, index) => index === i)
      if (target) {
        target.count = 6
      }
    })
    rangeRandom4.forEach(i => {
      let target = dateRange.find((item, index) => index === i)
      if (target) {
        target.count = 11
      }
    })

    dateRange.unshift(...emptyArray)
    this.getFirstLineDate(dateRange)
    this.dateList = dateRange;
  },
  methods: {
    // 获取box的颜色
    getBoxColor(item) {
      if (!item.count) {
        return 'empty'
      }
      let degree = '';
      switch (item.count) {
        case 1:
        case 2:
          degree = 'less'
          break;
        case 3:
        case 4:
          degree = 'little'
          break;
        case 5:
        case 6:
          degree = 'some'
          break;
        default:
          degree = 'many'
          break;
      }
      return `${degree} ${this.dateColorValue}`
    },
    // 获取第一个日期前面需要补的空box
    getEmptyDateCount(date) {
      const startWeek = date.week;
      if (startWeek === 0) {
        return 6
      } else {
        return startWeek - 1
      }
    },
    // 获取横向第一行的日期
    getFirstLineDate(date) {
      let firstLine = date.filter(item => item.week === 1)
      let temp = []
      firstLine.forEach((item, index, arr) => {
        let curr = item.date
        let next
        if (index === arr.length - 1) {
          // 是最后一个了
          next = "9999-99-99"
        } else {
          next = arr[index + 1].date
        }
        if (curr.substr(0, 7) <= next.substr(0, 7) && !temp.some(t => t.substr(0, 7) === curr.substr(0, 7))) {
          temp.push(curr)
          item.monthName = this.formatMonth(curr.substr(5, 2))
        }
      })
    },
    // 格式化月份
    formatMonth(month) {
      switch (month) {
        case '01':
          return '一'
        case '02':
          return '二'
        case '03':
          return '三'
        case '04':
          return '四'
        case '05':
          return '五'
        case '06':
          return '六'
        case '07':
          return '七'
        case '08':
          return '八'
        case '09':
          return '九'
        case '10':
          return '十'
        case '11':
          return '十一'
        case '12':
          return '十二'
      }
    },
    // 切换年视图颜色
    changeColorHandle(data) {
      const color = data.value;
      localStorage.setItem("dateColor", color)
      this.dateColorValue = color === "default" ? '' : color
    }
  }
}
</script>
<style lang="scss">
.contribution {
  width: 720px;
  .title {
    padding-bottom: 10px;
    padding-right: 15px;
    span {
      font-size: 18px;
      font-weight: bold;
    }
    @include flex;
    @include flex-primary-axis-between;
    .changeColor {
      font-size: 12px;
      color: #3598c1;
    }
  }
  .box-main {
    @include flex;
    padding-top: 20px;
    .box-week {
      @include flex;
      @include flex-column;
      @include flex-primary-axis-between;
      font-size: 12px;
      padding-right: 4px;
    }
  }
  .box-container {
    @include flex;
    @include flex-column;
    flex-wrap: wrap;
    width: 690px;
    height: 91px;
    position: relative;
    .box {
      width: 13px;
      height: 13px;
      border: 1px solid #ffffff;
      background: #ffffff;

      .month {
        position: absolute;
        top: -20px;
        font-size: 12px;
        min-width: 40px;
      }
      &.empty {
        background: var(--color-calendar-empty-bg);
      }
      &.less {
        background: var(--color-calendar-less-bg);
        &.yellow {
          background: var(--color-calendar-yellow-less-bg);
        }
        &.red {
          background: var(--color-calendar-red-less-bg);
        }
        &.blue {
          background: var(--color-calendar-blue-less-bg);
        }
        &.pink {
          background: var(--color-calendar-pink-less-bg);
        }
      }
      &.little {
        background: var(--color-calendar-little-bg);
        &.yellow {
          background: var(--color-calendar-yellow-little-bg);
        }
        &.red {
          background: var(--color-calendar-red-little-bg);
        }
        &.blue {
          background: var(--color-calendar-blue-little-bg);
        }
        &.pink {
          background: var(--color-calendar-pink-little-bg);
        }
      }
      &.some {
        background: var(--color-calendar-some-bg);
        &.yellow {
          background: var(--color-calendar-yellow-some-bg);
        }
        &.red {
          background: var(--color-calendar-red-some-bg);
        }
        &.blue {
          background: var(--color-calendar-blue-some-bg);
        }
        &.pink {
          background: var(--color-calendar-pink-some-bg);
        }
      }
      &.many {
        background: var(--color-calendar-many-bg);
        &.yellow {
          background: var(--color-calendar-yellow-many-bg);
        }
        &.red {
          background: var(--color-calendar-red-many-bg);
        }
        &.blue {
          background: var(--color-calendar-blue-many-bg);
        }
        &.pink {
          background: var(--color-calendar-pink-many-bg);
        }
      }
    }
  }
}
</style>