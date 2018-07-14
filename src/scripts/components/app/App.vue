<template>
  <div>
      <span class="test">hello VUE!</span>
      <hello-div></hello-div>
  </div>
</template>

<script>
  import { eventBus, state } from '../../main';
  import Hello from '../hello/Hello.vue';

  export default {
    components: {
        helloDiv: Hello,
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
    @import '../../global/_variables.less';
    @import 'styles/app.less';
</style>
