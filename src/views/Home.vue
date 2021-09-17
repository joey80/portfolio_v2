<template>
  <section class="home">
    <h1 class="home__message">
      Hello.<br />
      my name is <span class="home--stronger">Joey Leger</span><br />
      and I'm a front-end engineer.
    </h1>
    <router-link to="/projects" aria-label="portfolio">
      <Button class="home__btn"> Check Out My Work &rarr; </Button>
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
        <joey-badge>React</joey-badge>, and <joey-badge>Vue</joey-badge>. With the back-end side I
        enjoy working with <joey-badge>Node</joey-badge>, <joey-badge>Express</joey-badge>,
        <joey-badge>PHP</joey-badge>, and <joey-badge>MySQL</joey-badge> because this is where all
        of the functionality is.
      </p>
    </div>
    <img
      src="~@/assets/images/stock__computer.jpg"
      alt="laptop computer on table"
      class="home__image"
      height="541"
      width="811"
    />
  </section>
</template>

<script>
import Badge from '../components/Badge/Badge.vue'
import Button from '../components/Button/index.vue'

export default {
  components: {
    joeyBadge: Badge,
    Button,
  },
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 80px;

  &__message {
    text-align: right;
    font-size: 1.8em;
    line-height: 1.5em;

    @include tablet {
      line-height: 1.4em;
      font-size: 2.5em;
    }

    @include desktop {
      font-size: 3.5em;
    }
  }

  &__line {
    margin-top: 60px;
    width: 100%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 1)
    );

    @include tablet {
      margin-top: 100px;
    }
  }

  &__btn {
    display: inline-block;
    transition: all 0.3s ease-in-out;
    padding: 20px 40px 20px 40px;
    border: 1px solid rgba(34, 33, 51, 0.5);
    border-radius: 5px;
    margin-top: 60px;
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    color: #000;
    transform: translateX(-10px);

    @include tablet {
      font-size: 0.8em;
    }

    @include desktop {
      font-size: 1em;
    }

    &:hover {
      cursor: pointer;
      background-color: #e75151;
      border-color: #fff;
      color: #fff;
      transition: all 0.3s ease-in-out;
      transform: translateX(0);
    }
  }

  &__arrow {
    transform: scale(1.5);
    margin-left: 20px;
  }

  &__skills {
    margin-top: 30px;
    text-align: left;
    line-height: 2.5;
    font-size: 0.8em;
    text-indent: 7em;

    @include tablet {
      margin-top: 80px;
      text-align: right;
    }

    @include desktop {
      max-width: 90%;
      font-size: 1em;
    }

    &--larger {
      font-size: 1.1em;

      @include tablet {
        font-size: 1.2em;
      }
    }

    &--highlight {
      background-color: fade-out($sidebar-color, 0.85);
      padding: 5px;
      border-radius: 7px;

      @include tablet {
        padding: 4px;
      }
    }
  }

  &__image {
    border-radius: 7px;
    margin: 60px auto 80px auto;
    max-height: 200px;
    max-width: 70%;

    @include tablet {
      margin: 70px 0 80px 0;
      max-height: 300px;
    }

    @include desktop {
      margin: 100px 0 80px 0;
      max-height: 100%;
      max-width: 100%;
    }
  }

  &--stronger {
    font-weight: 700;
    color: $sidebar-color;
  }
}
</style>
