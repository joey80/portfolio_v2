<template>
  <div class="home">
      <div class="home__message">
          Hello.<br />
          my name is <span class="home--stronger">Joey Leger</span><br />
          and I'm a full-stack developer.
      </div>
      <router-link to="/projects"><div class="btn home__btn">Check Out My Work <font-awesome-icon icon="long-arrow-alt-right" class="home__arrow"/></div></router-link>
      <div class="home__line"></div>
      <div class="home__skills">
          <p>I am a self-taught developer currently living just outside of <span class="home--stronger">Charlottesville, Virginia.</span> I love
          front-end development - <span class="home__skills--highlight">HTML</span>, <span class="home__skills--highlight">CSS</span>,
            <span class="home__skills--highlight">Javascript</span> - because it deals with design, UI/UX and getting to work with JavaScript
            libraries like <span class="home__skills--highlight">Vue js</span>. My focus is always on a mobile first experience and making sure
            that the details scale up nicely. I enjoy back-end development - <span class="home__skills--highlight">PHP</span>,
            <span class="home__skills--highlight">Python</span>, <span class="home__skills--highlight">mySQL</span>, <span class="home__skills--highlight">Express</span> - because this is
            where all of the functionality is. With front-end work it’s fun to design the look of the car but with back-end I like to get my
            ‘hands greasy’ in the engine creating databases and API’s. 2019</p>
      </div>
      <img src=~images/stock__computer.jpeg class="home__image" />
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
  @import 'styles/home.less';
</style>
