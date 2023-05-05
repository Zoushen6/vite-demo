<template>
  <Layout style="min-height: 100vh">
    <LeftLayout />
    <RightLayout />
  </Layout>
</template>
<script lang="ts" setup>
  import { Layout } from "ant-design-vue";
  import LeftLayout from "@/view/LayOut/LeftLayout.vue";
  import RightLayout from "@/view/LayOut/RightLayout.vue";
</script>
<style lang="less" scoped></style>
