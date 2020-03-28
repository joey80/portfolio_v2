<template>
  <section>
    <joey-sidebar />
    <joey-content-container />
  </section>
</template>

<script>
import ContentContainer from './components/ContentContainer/ContentContainer.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';

export default {
  components: {
    joeyContentContainer: ContentContainer,
    joeySidebar: Sidebar
  }
};
</script>

<style lang="less">
@import './global/main.less';
</style>
