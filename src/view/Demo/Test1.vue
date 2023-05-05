<template>
  <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="handleClick(item)">{{ item.a }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";

  const list = reactive([
    {
      a: 1,
    },
    {
      a: 2,
    },
    {
      a: 3,
    },
    {
      a: 4,
    },
  ]);
  const handleClick = (item) => {
    console.log(item);
  };
</script>

<style scoped></style>
