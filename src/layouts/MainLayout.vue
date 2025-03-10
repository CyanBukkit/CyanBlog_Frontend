<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

const router = useRouter();
const collapsed = ref<boolean>(false);

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <h1>CyanBlog</h1>
      </div>
      <a-menu
        :selectedKeys="[router.currentRoute.value.path]"
        theme="dark"
        mode="inline"
      >
        <a-menu-item key="/" @click="router.push('/')">
          <template #icon><home-outlined /></template>
          <span>首页</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-fold-outlined
          v-if="!collapsed"
          class="trigger"
          @click="toggleCollapsed"
        />
        <menu-unfold-outlined
          v-else
          class="trigger"
          @click="toggleCollapsed"
        />
      </a-layout-header>
      <a-layout-content style="margin: 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        CyanBlog ©2024 Created by Trae
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

.logo h1 {
  color: #fff;
  font-size: 18px;
  margin: 0;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>