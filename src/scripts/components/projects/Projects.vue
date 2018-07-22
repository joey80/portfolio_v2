<template>
  <div class="projects">
      <h1>Projects</h1>
    <div class="projects__line"></div>
    <div class="projects__container">
      <div class="projects__container__left">
        <div class="projects__container__title">Tripsee</div>
        <div class="projects__container__description">
          Tripsee is a web app that is currently a work in progress that was built with Vue.js and deployed with Heroku.
          The purpose of the app is to allow the user to search for a destination. They can either search by a city name
          or the zip code. Afterwards they are presented with data returned from several different API's such as the current
          weather of that city, some places to eat and things to do there. I have many more features in mind to add on to
          this along with improving the design and UI/UX.
        </div>
        <div class="projects__container__stack">
          <span class="projects--stronger">STACK</span><br />
          <div class="projects__container__line"></div>
        </div>
      </div>
      <div class="projects__container__right">im on the right</div>
    </div>
  </div>
</template>

<script>
  import { eventBus, state } from '../../main';

  export default {
    components: {
    },
    data: function() {
      return {
      }
    },
    mounted() {
    }
  };
</script>

<style lang="less">
  @import '~globalLess';
  @import 'styles/projects.less';
</style>
