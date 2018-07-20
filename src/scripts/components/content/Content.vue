<template>
  <div class="content">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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
  @import 'styles/content.less';

  .slide-leave-active {
    backface-visibility: hidden;
	  animation: slide-in-blurred-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) reverse;
  }

  .slide-enter-active {
    backface-visibility: hidden;
    transform: translateZ(0);
    animation: slide-in-blurred-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) forwards;
  }

  @keyframes slide-in-blurred-right {
    0% {
      -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
              transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
      -webkit-transform-origin: 0% 50%;
              transform-origin: 0% 50%;
      -webkit-filter: blur(40px);
              filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
              transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
      -webkit-filter: blur(0);
              filter: blur(0);
      opacity: 1;
    }
  }
</style>
