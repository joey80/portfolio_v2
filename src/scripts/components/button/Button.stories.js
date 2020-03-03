import Button from './Button.vue';

const buttonTemplate = '<Button :class="`button--${color}`">{{text}}</Button>';

export default {
  title: 'Button'
};

export const Default = () => ({
  components: { Button },
  data: () => ({
    //color: 'default',
    text: 'Default Button'
  }),
  template: buttonTemplate
});

export const Primary = () => ({
  components: { Button },
  data: () => ({
    color: 'primary',
    text: 'Primary Button'
  }),
  template: buttonTemplate
});

export const Warning = () => ({
  components: { Button },
  data: () => ({
    color: 'warning',
    text: 'Warning Button'
  }),
  template: buttonTemplate
});
