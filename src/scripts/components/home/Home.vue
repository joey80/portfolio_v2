<template>
  <div class="home">
      <div class="home__message">
          Hello.<br />
          My name is <span class="home--stronger">Joey Leger</span><br />
          I'm a full-stack developer.
      </div>
      <div class="home__line"></div>
      <router-link to="/projects"><div class="btn home__btn">Check Out My Work <font-awesome-icon icon="long-arrow-alt-right" class="home__arrow"/></div></router-link>
      <img src=~images/stock__computer.jpeg class="home__image" />
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
  @import 'styles/home.less';
</style>
