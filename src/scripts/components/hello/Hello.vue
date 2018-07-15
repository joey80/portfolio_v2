<template>
  <div>
      <span class="poop">I'm the hello component</span>
  </div>
</template>

<script>
  import { eventBus, state } from '../../main';

  export default {
    components: {
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
  @import 'styles/hello.less';
</style>
