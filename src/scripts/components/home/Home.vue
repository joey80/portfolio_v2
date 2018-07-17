<template>
  <header>
      <div class="home__message">Hello. My name is <span class="home--stronger">Joey Leger</span><br /> and I am a full-stack developer.</div>
      <div class="home__line"></div>
  </header>
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
  @import 'styles/home.less';
</style>
