<template>
  <div class="projects">
      <h1>Projects</h1>
    <div class="projects__line"></div>

    <!-- PROJECT START -->
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
          <span class="projects--stronger">STACK</span>
          <div class="projects__container__line"></div>
          <span class="projects__container--highlight">Vue.js</span> <span class="projects__container--highlight">Webpack</span>
          <span class="projects__container--highlight">Babel</span> <span class="projects__container--highlight">Bulma</span>
          <span class="projects__container--highlight">Express</span> <span class="projects__container--highlight">Heroku</span>
        </div>
      </div>
      <div class="projects__container__right tripsee__image"></div>
    </div>
    <!-- PROJECT END -->

    <!-- PROJECT START -->
    <div class="projects__container">
      <div class="projects__container__left">
        <div class="projects__container__title">Twiggle</div>
        <div class="projects__container__description">
          Seeing how the todo app is the new "Hello World" I thought that I would try my hand at it. I wanted to go more
          of a vanilla route and code it without using a framework. The inputs trigger an AJAX call to the PHP backend
          so everything updates without a page refresh. All the data is stored in a MySQL database and is read from an
          API call in the AJAX. It is also fully responsive and I'm looking forward to building this out with more
          features and enhancements.
        </div>
        <div class="projects__container__stack">
          <span class="projects--stronger">STACK</span>
          <div class="projects__container__line"></div>
          <span class="projects__container--highlight">HTML</span> <span class="projects__container--highlight">CSS3 (PostCSS)</span>
          <span class="projects__container--highlight">Javascript (XJAX, Gulp, Webpack)</span> <span class="projects__container--highlight">PHP</span>
          <span class="projects__container--highlight">MySQL</span>
        </div>
      </div>
      <div class="projects__container__right twiggle__image"></div>
    </div>
    <!-- PROJECT END -->

    <!-- PROJECT START -->
    <div class="projects__container creative">
      <div class="projects__container__left">
        <div class="projects__container__title">Creative Wonder</div>
        <div class="projects__container__description">
          This is a demo website that I made for a fictional daycare company. I'm in the process of building it out into
          a full laraval backend but for the moment it is just a static site. All of the design and coding was done by me.
          It is fully responsive and was build with CSS3 and Javascript.
        </div>
        <div class="projects__container__stack">
          <span class="projects--stronger">STACK</span><br />
          <div class="projects__container__line"></div>
        </div>
      </div>
      <div class="projects__container__right">im on the right</div>
    </div>
    <!-- PROJECT END -->

    <!-- PROJECT START -->
    <div class="projects__container">
      <div class="projects__container__left">
        <div class="projects__container__title">Joey UI</div>
        <div class="projects__container__description">
          This is the site that you're on right now. This is just a place where I can showcase my work and I'm looking forward
          to adding more to it in the future.
        </div>
        <div class="projects__container__stack">
          <span class="projects--stronger">STACK</span><br />
          <div class="projects__container__line"></div>
        </div>
      </div>
      <div class="projects__container__right">im on the right</div>
    </div>
    <!-- PROJECT END -->


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
