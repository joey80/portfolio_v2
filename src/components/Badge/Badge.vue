<template>
  <span class="badge" :class="type ? 'badge--project' : null">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'project',
    },
  },
}
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
    display: inline;
    margin: 5px;
  }
}
</style>
