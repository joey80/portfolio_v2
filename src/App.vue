<template>
  <section class="app__container">
    <Sidebar />
    <ContentContainer />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ContentContainer from '@/components/ContentContainer.vue';
import Sidebar from '@/components/SidebarComponent.vue';

export default defineComponent({
  components: {
    ContentContainer,
    Sidebar,
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Coustard|Raleway:400,700&display=swap');

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
