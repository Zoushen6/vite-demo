<template>
  <div>
    <div v-for="item in menuList" :key="item.path">
      <MenuItem v-if="!item.children" :key="item.path">
        <component :is="PieChartOutlined" />
        <span>{{ item.name }}</span>
      </MenuItem>
      <SubMenu v-else :key="item.path">
        <template #title>
          <span>
            <user-outlined />
            <span>{{ item.name }}</span>
          </span>
        </template>
        <MenuTree :menu-list="item.children" />
      </SubMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  } from "@ant-design/icons-vue";
  import { Menu, MenuItem, SubMenu } from "ant-design-vue";
  import { asyncRoutes } from "@/router/routes";
  const props = defineProps({
    menuList: {
      type: Array,
      default: () => [],
    },
  });
</script>

<style scoped lang="less"></style>
