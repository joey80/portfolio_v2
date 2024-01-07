<template>
  <span class="badge" :class="type ? 'badge--project' : null">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: String,
  },
});
</script>

<style lang="scss">
.badge {
  background-color: fade-out($primary-color, 0.85);
  border-radius: 7px;
  display: inline;
  line-height: 1em;
  padding: 6px;

  @include desktop {
    margin: 0 5px 0 0;
  }

  &--project {
    display: inline-block;
    margin: 5px 5px 5px 0;
  }
}
</style>
