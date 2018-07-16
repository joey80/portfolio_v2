<template>
  <div class="sidebar">
    <div class="sidebar__quote">
      I'm a creative and passionate full-stack developer that looks forward to taking on new challenges and to
      <span class="sidebar--stronger">never stop learning new things</span>
    </div>
    <div class="sidebar__social">
      check out my <span class="sidebar--stronger"><a href='#'>GitHub</a></span><br />
      connect with me on <span class="sidebar--stronger"><a href='#'>LinkedIn</a></span>
    </div>
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
  @import 'styles/sidebar.less';
</style>
