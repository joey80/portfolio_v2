<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="projects__message">
      <strong>Note:</strong> Most of these projects are hosted on free Heroku Dynos. Since they are
      free they require a 15-30 second 'wake up' period to spin up the dyno. The initial load time
      is not due to the app itself.
    </div>
    <div class="projects__line" />

    <!-- REALESTATE PROJECT START -->
    <div class="projects__container">
      <div class="projects__container__left">
        <div class="projects__container__title">
          RealEstate
        </div>
        <a href="https://joeyui-realestate.netlify.com/" target="_blank">Live Site</a>
        <a href="https://github.com/joey80/realestate" target="_blank">GitHub Source</a>
        <div class="projects__container__description">
          This real estate app is built with React and Redux. It's powered by the Zillow API and
          will return home and pricing data for the address that you type in. It also uses Storybook
          for the UI development which is pretty fun to and helpful to use and its hosted with
          Netlify.
        </div>
        <div class="projects__container__stack">
          <span class="projects--stronger">STACK</span>
          <div class="projects__container__line" />
          <span class="projects__container--highlight">React</span>
          <span class="projects__container--highlight">Redux</span>
          <span class="projects__container--highlight">Jest</span>
          <span class="projects__container--highlight">Enzyme</span>
          <span class="projects__container--highlight">Chai</span>
          <span class="projects__container--highlight">Sass</span>
          <span class="projects__container--highlight">Storybook</span>
          <span class="projects__container--highlight">Netlify</span>
        </div>
      </div>
      <div class="projects__container__right realestate__image" />
    </div>
    <!-- REALESTATE PROJECT END -->

    <!-- TRIPSEE PROJECT START -->
    <div class="projects__container">
      <div class="projects__container__left">
        <div class="projects__container__title">
          Tripsee
        </div>
        <a href="https://joeyui-tripsee.herokuapp.com/" target="_blank">Live Site</a>
        <a href="https://github.com/joey80/tripsee_v2" target="_blank">GitHub Source</a>
        <div class="projects__container__description">
          Tripsee is a web app that is currently a work in progress that was built with Vue.js and
          deployed with Heroku. The purpose of the app is to allow the user to search for a
          destination. They can either search by a city name or the zip code. Afterwards they are
          presented with data returned from several different API's such as the current weather of
          that city, some places to eat and things to do there. I am currently adding more features
          to this as I continue the development of it.
        </div>
        <div class="projects__container__stack">
          <span class="projects--stronger">STACK</span>
          <div class="projects__container__line" />
          <span class="projects__container--highlight">Vue.js</span>
          <span class="projects__container--highlight">Webpack</span>
          <span class="projects__container--highlight">Babel</span>
          <span class="projects__container--highlight">Bulma</span>
          <span class="projects__container--highlight">Express</span>
          <span class="projects__container--highlight">Heroku</span>
        </div>
      </div>
      <div class="projects__container__right tripsee__image" />
    </div>
    <!-- TRIPSEE PROJECT END -->

    <!-- CREATIVE WONDER PROJECT START -->
    <div class="projects__container">
      <div class="projects__container__left">
        <div class="projects__container__title projects--smaller">
          Creative Wonder
        </div>
        <a href="https://joeyui-creativewonder.netlify.com/" target="_blank">Live Site</a>
        <a href="https://github.com/joey80/creative_wonder_frontend_v2" target="_blank">
          GitHub Source
        </a>
        <div class="projects__container__description">
          This is a React project that I've been working on. I created the design and I've been
          gradually building out some features for it. When it is finished it will be a full-stack
          project but right now I just have the front-end to show.
        </div>
        <div class="projects__container__stack">
          <span class="projects--stronger">STACK</span>
          <div class="projects__container__line" />
          <span class="projects__container--highlight">React</span>
          <span class="projects__container--highlight">Jest</span>
          <span class="projects__container--highlight">Sass</span>
          <span class="projects__container--highlight">Webpack</span>
          <span class="projects__container--highlight">Cloudinary</span>
          <span class="projects__container--highlight">Netlify</span>
        </div>
      </div>
      <div class="projects__container__right creative__image" />
    </div>
    <!-- CREATIVE WONDER PROJECT END -->

    <!-- TWIGGLE PROJECT START -->
    <div class="projects__container">
      <div class="projects__container__left">
        <div class="projects__container__title">
          Twiggle
        </div>
        <a href="https://joeyui-twiggle.herokuapp.com" target="_blank">Live Site</a>
        <a href="https://github.com/joey80/final_twiggle" target="_blank">GitHub Source</a>
        <div class="projects__container__description">
          My take on a todo app. The frontend is all vanilla JavaScript with some Bootstrap and
          custom CSS on top. The backend was built with PHP 7 and MySQL. The API is just AJAX calls
          to JSON data that was returned from the PHP. The user data is handled with auth0 and
          accepts email, Facebook or Google social logins. It's fully resonsive and is pretty fun to
          use.
        </div>
        <div class="projects__container__stack">
          <span class="projects--stronger">STACK</span>
          <div class="projects__container__line" />
          <span class="projects__container--highlight">HTML</span>
          <span class="projects__container--highlight">PostCSS</span>
          <span class="projects__container--highlight">Bootstrap</span>
          <span class="projects__container--highlight">Javascript</span>
          <span class="projects__container--highlight">AJAX</span>
          <span class="projects__container--highlight">Gulp</span>
          <span class="projects__container--highlight">Webpack</span>
          <span class="projects__container--highlight">PHP</span>
          <span class="projects__container--highlight">MySQL</span>
          <span class="projects__container--highlight">auth0</span>
          <span class="projects__container--highlight">Heroku</span>
        </div>
      </div>
      <div class="projects__container__right twiggle__image" />
    </div>
    <!-- TWIGGLE PROJECT END -->

    <!-- CSV IMPORT PROJECT START -->
    <div class="projects__container">
      <div class="projects__container__left">
        <div class="projects__container__title">
          CSV Importer
        </div>
        <a href="https://github.com/joey80/csv_import" target="_blank">GitHub Source</a>
        <div class="projects__container__description">
          This was from a project that I worked on that required several csv files to be processed
          and have their contents saved to a database nightly via a cron job. I used PHP 7 for this
          as it was part of an existing LAMP stack that used a CMS.
        </div>
        <div class="projects__container__stack">
          <span class="projects--stronger">STACK</span>
          <div class="projects__container__line" />
          <span class="projects__container--highlight">PHP</span>
          <span class="projects__container--highlight">MySQL</span>
        </div>
      </div>
      <div class="projects__container__right csv__image" />
    </div>
    <!-- CSV IMPORT PROJECT END -->

    <!-- JOEYUI PROJECT START -->
    <div class="projects__container">
      <div class="projects__container__left">
        <div class="projects__container__title">
          Joey UI
        </div>
        <a href="https://github.com/joey80/portfolio_v2" target="_blank">GitHub Source</a>
        <div class="projects__container__description">
          This is the site that you're on right now. This is just a place where I can showcase my
          work and I'm looking forward to adding more to it in the future. Let me know what you
          think!
        </div>
        <div class="projects__container__stack">
          <span class="projects--stronger">STACK</span>
          <div class="projects__container__line" />
          <span class="projects__container--highlight">Vue.js</span>
          <span class="projects__container--highlight">Webpack</span>
          <span class="projects__container--highlight">Babel</span>
          <span class="projects__container--highlight">Less</span>
          <span class="projects__container--highlight">Express</span>
          <span class="projects__container--highlight">Digital Ocean Droplet</span>
        </div>
      </div>
      <div class="projects__container__right joeyui__image" />
    </div>
    <!-- JOEYUI PROJECT END -->
  </div>
</template>

<script>
import { eventBus, state } from '../../main';

export default {};
</script>

<style lang="less">
@import '~globalLess';
@import 'styles/projects.less';
</style>
