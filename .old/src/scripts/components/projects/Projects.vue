<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="projects__message">
      <strong>Note:</strong> Most of these projects are hosted on free Heroku Dynos. Since they are
      free they require a 15-30 second 'wake up' period to spin up the dyno. The initial load time
      is not due to the app itself.
    </div>
    <div class="projects__line" />

    <template v-for="item in items">
      <div :key="item.title" class="projects__container">
        <div class="projects__container__left">
          <div class="projects__container__title">
            {{ item.title }}
          </div>
          <a v-if="item.siteURL" :href="item.siteURL" target="_blank">Live Site</a>
          <a :href="item.gitURL" target="_blank">GitHub Source</a>
          <div class="projects__container__description">
            {{ item.description }}
          </div>
          <div class="projects__container__stack">
            <span class="projects--stronger">STACK</span>
            <div class="projects__container__line" />
            <template v-for="elm in item.stack">
              <Badge :key="elm">
                {{ elm }}
              </Badge>
            </template>
          </div>
        </div>
        <div :class="item.imageURL" class="projects__container__right" />
      </div>
    </template>
  </div>
</template>

<script>
import { eventBus, state } from '../../main';
import Badge from '../Badge/Badge';
import { Data } from './Projects.data';

export default {
  components: {
    Badge
  },
  data() {
    return {
      items: Data
    };
  }
};
</script>

<style lang="less">
@import '~globalLess';
@import 'styles/projects.less';
</style>
