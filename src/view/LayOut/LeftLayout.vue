<template>
  <LayoutSider v-model:collapsed="collapsed" collapsible>
    <div class="logo"></div>
    <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <MenuItem key="1">
        <component :is="PieChartOutlined" />
        <span>Option 1</span>
      </MenuItem>
      <MenuItem key="2">
        <desktop-outlined />
        <span>Option 2</span>
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
      <MenuItem key="9">
        <file-outlined />
        <span>File</span>
      </MenuItem>
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

  const collapsed = ref<boolean>(false);
  const selectedKeys = ref<string[]>(["1"]);
</script>

<style scoped lang="less">
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
</style>
