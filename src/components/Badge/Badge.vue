<template>
  <span class="badge"><slot /></span>
</template>

<style lang="scss">
.badge {
  background-color: fade-out($primary-color, 0.85);
  display: inline-block;
  padding: 6px;
  line-height: 1em;
  margin: 5px;
  border-radius: 7px;

  @include desktop {
    display: inline;
    margin: 0 5px 0 0;
  }
}
</style>
