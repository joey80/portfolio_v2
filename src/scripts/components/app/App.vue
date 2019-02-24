<template>
  <div class="app__container">
    <sidebar-div></sidebar-div>
    <content-div></content-div>
  </div>
</template>

<script>
  import { eventBus, state } from '../../main';
  import Sidebar from '../sidebar/Sidebar.vue';
  import Content from '../content/Content.vue';
  import axios from 'axios';

  export default {
    components: {
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
