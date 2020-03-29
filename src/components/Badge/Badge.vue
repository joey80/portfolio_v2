<template>
  <span class="badge"><slot /></span>
</template>

<style lang="scss">
.badge {
  background-color: fade-out($primary-color, 0.85);
  padding: 6px;
  line-height: 1em;
  border-radius: 7px;
}
</style>
