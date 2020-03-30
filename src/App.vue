<template>
  <section class="app__container">
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap');

.app {
  &__container {
    display: flex;
    height: 100vh;
    flex-direction: column;

    @include tablet {
      flex-direction: row;
    }
  }
}
</style>
