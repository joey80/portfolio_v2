<template>
  <div class="app__container">
    <sidebar-div></sidebar-div>
    <content-div></content-div>
  </div>
</template>

<script>
  import { eventBus, state } from '../../main';
  import Header from '../header/Header.vue';
  import Sidebar from '../sidebar/Sidebar.vue';
  import Content from '../content/Content.vue';

  export default {
    components: {
      headerDiv: Header,
      sidebarDiv: Sidebar,
      contentDiv: Content
    },
    data: function() {
      return {
      }
    },
    mounted() {
    }
  };
</script>

<style lang="less">
    @import '~globalLess';
    @import 'styles/app.less';
</style>
