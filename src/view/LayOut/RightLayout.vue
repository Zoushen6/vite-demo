<template>
  <Layout>
    <LayoutHeader style="background: #fff; padding: 0" />
    <LayoutContent style="margin: 16px 16px">
      <!--      <Breadcrumb style="margin: 16px 0">-->
      <!--        <BreadcrumbItem>User</BreadcrumbItem>-->
      <!--        <BreadcrumbItem>Bill</BreadcrumbItem>-->
      <!--      </Breadcrumb>-->
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        <router-view />
      </div>
    </LayoutContent>
    <LayoutFooter style="text-align: center"> Ant Design ©2018 Created by Ant UED </LayoutFooter>
  </Layout>
</template>

<script lang="ts" setup>
  import {
    Layout,
    LayoutHeader,
    LayoutFooter,
    LayoutContent,
    Breadcrumb,
    BreadcrumbItem,
  } from "ant-design-vue";
</script>

<style scoped lang="less">
  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme="dark"] .site-layout .site-layout-background {
    background: #141414;
  }
</style>
