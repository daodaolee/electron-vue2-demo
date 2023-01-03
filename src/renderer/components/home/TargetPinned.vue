<template>
  <div class="target-pinned">
    <div class="title">目标</div>
    <div class="target-list">
      <div class="target-item" v-for="(item, index) in targetList" :key="index">
        <div class="content">
          <div class="header">
            <a href="javascript:;">{{ item.title }}</a>
          </div>
          <div class="tags" v-if="item.tags.length">
            <i class="icon tag"></i>
            <span v-for="tag in item.tags">{{ tag }}</span>
          </div>
          <p class="descr">{{ item.descr }}</p>
        </div>
        <div class="extra">
          <div class="item-num">
            <div>
              <span class="total">{{ item.totalNum }}</span>
            </div>
            <div>
              <span class="complete">{{ item.completeNum }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      targetList: [{
        title: "Vue 与 Web Components",
        descr: '我们认为 Vue 和 Web Components 大体上是互补的技术。Vue 能很好地解析和创建自定义元素。不论是在将自定义元素整合到已有的 Vue 应用中，还是使用 Vue 构建和分发自定义元素，你都能获得很好的支持。',
        tags: ['Vue'],
        totalNum: '16',
        completeNum: '10'
      }, {
        title: "Blender",
        descr: 'blender是一款跨平台的应用工具，可以在Linux、macOS以及Windows系统下运行。与其他3D建模工具相比，Blender对内存和驱动的需求更低。其界面使用OpenGL，在所有支持的硬件与平台都能提供一致的用户体验',
        tags: ['Blender', '3D', 'Video'],
        totalNum: '10',
        completeNum: '4'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.target-pinned {
  padding-top: 20px;
  width: 720px;
  .title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 5px;
  }
  .target-list {
    @include flex;
    @include flex-primary-axis-between;
    flex-wrap: wrap;
    .target-item {
      width: calc(50% - 20px);
      max-width: 600px;
      margin: 0.5em !important;
      padding: 14px;
      border: 1px solid #dce3e8;
      border-radius: 4px;
      @include flex;
      @include flex-column;
      .content {
        min-height: 100px;
        flex-grow: 1;
        .header {
          a {
            font-size: 16px;
            font-weight: bold;
            word-break: break-all;
            vertical-align: middle;
            color: #005980;
            transition: color 0.1s ease;
            &:hover {
              color: #1283ba;
            }
          }
        }
        .tags {
          padding-left: 23px;
          position: relative;
          @include flex;
          flex-wrap: wrap;
          // line-height: 27px;
          padding-top: 7px;
          .icon {
            @include icon("17", "17", "../../assets/img/tags.png");
            left: 0px;
            top: 8px;
          }
          span {
            font-size: 12px;
            padding-right: 5px;
            cursor: pointer;
          }
        }
        .descr {
          margin: 8px 0;
          min-height: 30px;
          color: #40485b;
          overflow: hidden;
          @include texts-ellipsis(2);
        }
      }
      .extra {
        padding-top: 15px;
        @include flex;
        @include flex-primary-axis-end;
        .item-num {
          @include flex;
          div {
            @include flex;
            @include flex-secondary-axis-center;
            &:last-child {
              padding-left: 10px;
            }
          }
        }

        .total:before {
          content: "";
          @include icon("18", "18", "../../assets/img/totalNum.png");
          position: relative;
          top: 4px;
          left: -2px;
        }
        .complete::before {
          content: "";
          @include icon("18", "18", "../../assets/img/completeNum.png");
          position: relative;
          top: 4px;
          left: -2px;
        }
      }
    }
  }
}
</style>