<template>
  <a-config-provider :locale="enUS">
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}
</style>