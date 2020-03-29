<template>
  <section class="content">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<style lang="scss">
.content {
  flex-grow: 1;
  order: 1;
  background-color: #f2f2f2;
  background-image: url('~@/assets/images/stripe.png');
  background-position: -800px -10px;
  background-repeat: no-repeat;
  color: #000;
  padding: 90px 3% 3% 3%;

  @include tablet {
    order: 2;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 3%;
  }
}

.slide-leave-active {
  animation: slide-in-blurred-right 0.5s cubic-bezier(0.23, 1, 0.32, 1) reverse;
}

.slide-enter-active {
  animation: slide-in-blurred-right 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes slide-in-blurred-right {
  0% {
    -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
    transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    opacity: 1;
  }
}
</style>
