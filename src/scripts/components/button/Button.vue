<template>
  <button class="button" :class="`button--${color}`">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'normal'
    },
    text: {
      type: String,
      default: 'button name'
    }
  }
};
</script>

<style lang="less" scoped>
.button {
  background-color: gray;
  border-radius: 0.4rem;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem;

  &--primary {
    background-color: blue;
  }

  &--warning {
    background-color: red;
  }
}
</style>
