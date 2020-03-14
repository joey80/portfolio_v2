<template>
  <aside class="sidebar">
    <div class="sidebar__links">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
    <div class="sidebar__quote">
      I'm a creative and passionate full-stack developer that looks forward to taking on new
      challenges and to
      <span class="sidebar--stronger">never stop learning new things</span>
    </div>
    <div class="sidebar__social">
      <ul>
        <li>
          check out my
          <span class="sidebar--stronger"
            ><a href="https://github.com/joey80" target="_blank">GitHub</a></span
          >
        </li>
        <li>
          connect with me on
          <span class="sidebar--stronger"
            ><a href="https://www.linkedin.com/in/joey-leger-363715a5/" target="_blank"
              >LinkedIn</a
            ></span
          >
        </li>
      </ul>
    </div>
    <div class="sidebar__avatar"></div>
  </aside>
</template>

<script>
import { eventBus, state } from '../../main';

export default {};
</script>

<style lang="less">
@import '~globalLess';
@import 'styles/sidebar.less';
</style>
