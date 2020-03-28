<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view />
  </div>
  <!-- HERE IS WHERE SIDEBAR LIVES -->
</template>

<style lang="less">
@import './global/main.less';
</style>
