<script setup lang="ts">
import { Typography } from 'ant-design-vue';

const { Title } = Typography;
</script>

<template>
  <div class="home-container">
    <a-typography>
      <Title>CyanBlog</Title>
    </a-typography>
  </div>
</template>

<style scoped>
.home-container {
  padding: 24px;
  background: #fff;
  border-radius: 2px;
}
</style>