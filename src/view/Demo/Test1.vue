<template>
  <div class="content">
    <div class="list" ref="wrapper" @scroll="wrapperScroll">
      <div
        class="virtual-wrapper"
        :style="{ height: containerHeight + 'px' }"
        style="position: relative"
      >
        <div
          :style="{ transform: `translateY(${scrollTopWrapper}px)` }"
          style="position: absolute; width: 100%"
        >
          <div
            class="item"
            :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
            v-for="(item, index) in showItem"
            :key="index"
            @click="handleClick(item)"
            >{{ item.a }}</div
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, nextTick, computed } from "vue";

  //设置10W条模拟数据
  const count = ref(100000);
  const list = reactive<any>([]);

  for (let index = 0; index < count.value; index++) {
    list.push({
      a: index,
    });
  }

  const wrapper = ref();
  //容器高度
  const wrapperHeight = ref(0);
  //item高度
  const itemHeight = ref(40);
  //容器真实高度
  let containerHeight = ref(list.length * itemHeight.value);
  //视窗内应该显示的 DOM 数量
  let showItemNum = ref(0);
  //当前状态的索引
  let startKey = ref(0);
  nextTick(() => {
    //容器高度
    wrapperHeight.value = wrapper.value.clientHeight;
    //运算出应该显示的 DOM 数量
    showItemNum.value = Math.ceil(wrapperHeight.value / itemHeight.value);
  });

  //片段容器偏移量
  let scrollTopWrapper = ref(0);
  //滚动事件
  const wrapperScroll = (e) => {
    // console.log(e.target.scrollTop);
    //计算当前状态的索引
    let tempNum = Math.floor(e.target.scrollTop / itemHeight.value);
    // console.log("tempNum: " + tempNum, "startKey: " + startKey.value);
    //当前状态的索引发生变化才触发视图层刷新
    if (tempNum !== startKey.value) {
      startKey.value = tempNum;
      scrollTopWrapper.value = e.target.scrollTop;
    }
    //滑条拉回最顶端时scrollTopWrapper置为空
    if (tempNum === 0) {
      scrollTopWrapper.value = 0;
    }
  };

  //对数据进行切片处理方法
  const showItem = computed(() => {
    return [...list.slice(startKey.value, showItemNum.value + startKey.value)];
  });
  const handleClick = (item) => {
    console.log(item);
  };
</script>

<style scoped lang="less">
  .content {
    height: 400px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .list {
      width: 200px;
      height: 400px;
      border: 1px solid pink;
      box-sizing: border-box;
      overflow-y: scroll;
      .item {
      }
    }
  }
</style>
