<template>
  <LayoutSider v-model:collapsed="collapsed" collapsible>
    <div class="logo"></div>
    <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @select="selectMenu">
      <MenuItem v-for="item in asyncRoutes" :key="item.path">
        <component :is="PieChartOutlined" />
        <span>{{ item.name }}</span>
      </MenuItem>
      <SubMenu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            <span>User</span>
          </span>
        </template>
        <MenuItem key="3">Tom</MenuItem>
        <MenuItem key="4">Bill</MenuItem>
        <MenuItem key="5">Alex</MenuItem>
      </SubMenu>
      <SubMenu key="sub2">
        <template #title>
          <span>
            <team-outlined />
            <span>Team</span>
          </span>
        </template>
        <MenuItem key="6">Team 1</MenuItem>
        <MenuItem key="8">Team 2</MenuItem>
      </SubMenu>
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
  import { useRouter } from "vue-router";
  const router = useRouter();
  const collapsed = ref<boolean>(false);
  const selectedKeys = ref<string[]>(["1"]);
  const selectMenu = (item) => {
    console.log(item);
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
