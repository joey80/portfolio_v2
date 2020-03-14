<template>
  <div class="home">
    <div class="home__message">
      Hello.<br />
      my name is <span class="home--stronger">Joey Leger</span><br />
      and I'm a front-end engineer.
    </div>
    <router-link to="/projects">
      <div class="btn home__btn">
        Check Out My Work <font-awesome-icon icon="long-arrow-alt-right" class="home__arrow" />
      </div>
    </router-link>
    <div class="home__line" />
    <div class="home__skills">
      <p>
        I am a front-end engineer by trade who lives just outside of
        <span class="home--stronger">Charlotte, North Carolina</span> and I'm passionate about
        technology - not a specific framework or language. In this line of work it's about
        adaptation, and what works best for the project. I'm open to learning any stack if it works.
        I want to be the best developer I can be. I enjoy creating in my career and after hours. I
        believe in shipping quality code and working in flow.
      </p>
      <p>
        I love both sides of full-stack development. The front-end scratches my creative itch,
        especially when it comes to UI/UX and building mobile-first experiences. I also enjoy all
        things Javascript and using libraries such as
        <span class="home__skills--highlight">React</span>, and
        <span class="home__skills--highlight">Vue</span>. With the back-end side I enjoy working
        with <span class="home__skills--highlight">Node</span>,
        <span class="home__skills--highlight">Express</span>,
        <span class="home__skills--highlight">PHP</span>, and
        <span class="home__skills--highlight">MySQL</span> because this is where all of the
        functionality is.
      </p>
    </div>
    <img src="~images/stock__computer.jpeg" class="home__image" />
  </div>
</template>

<script>
import { eventBus, state } from '../../main';

export default {};
</script>

<style lang="less">
@import '~globalLess';
@import 'styles/home.less';
</style>
