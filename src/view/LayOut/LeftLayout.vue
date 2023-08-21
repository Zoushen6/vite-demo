<template>
  <LayoutSider v-model:collapsed="collapsed" collapsible>
    <div class="logo"></div>
    <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @select="selectMenu">
      <menu-tree :menu-list="asyncRoutes" />
    </Menu>
  </LayoutSider>
</template>

<script lang="ts" setup>
  import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  } from "@ant-design/icons-vue";
  import { LayoutSider, Menu, MenuItem, SubMenu } from "ant-design-vue";
  import { ref } from "vue";
  import { asyncRoutes } from "@/router/routes";
  // console.log(asyncRoutes);
  import { useRouter } from "vue-router";
  import { listenerRouteChange } from "@/router/menus";
  import MenuTree from "@/view/components/MenuTree.vue";
  const router = useRouter();
  const collapsed = ref<boolean>(false);
  const selectedKeys = ref<string[]>(["/home"]);
  // const openKeys = ref<string[]>([]);
  listenerRouteChange((route) => {
    // console.log(route);
    // let fullPath = route.fullPath?.substring(1, route.fullPath.length - 1);
    let fullPath = route.fullPath.split("/");
    fullPath.shift();
    selectedKeys.value = fullPath.map((item) => "/" + item);
  });
  const selectMenu = (item) => {
    // console.log(item);
    router.push(item.key);
  };
</script>

<style scoped lang="less">
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
</style>
