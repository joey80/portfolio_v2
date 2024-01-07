<template>
  <section class="home">
    <h1 class="home__message">
      Hello.<br />
      my name is <span class="home--stronger">Joey Leger</span><br />
      and I'm a full-stack engineer.
    </h1>
    <router-link to="/projects" custom v-slot="{ navigate }">
      <Button @click="navigate" class="home__btn" role="link">Check Out My Work &rarr;</Button>
    </router-link>
    <div class="home__line" />
    <div class="home__skills">
      <p>
        I am a full-stack engineer by trade who lives just outside of
        <span class="home--stronger">Charlotte, North Carolina</span> and I'm passionate about technology - not a specific framework or language. In this line of work it's about
        adaptation, and what works best for the project. I'm open to learning any stack if it works. I want to be the best developer
      </p>
      <p>I believe in shipping quality, <em>testable</em> code and working in flow.</p>
      <p>
        I love both sides of full-stack development. The front-end scratches my creative itch, especially when it comes to UI/UX and building mobile-first experiences. I also enjoy
        all things Javascript and using libraries such as
        <Badge>React</Badge>, and <Badge>Vue</Badge>. With the back-end side I enjoy working with <Badge>Node</Badge>, <Badge>C#</Badge> and <Badge>Python</Badge> creating API's
        and working with databases such as <Badge>SQL</Badge>, <Badge>ElasticSearch</Badge> and
        <Badge>Redis</Badge>
      </p>
    </div>
    <img
      alt="laptop computer on table"
      class="home__image"
      :src="mobile ? require(`@/assets/images/stock__computer-mobile.jpg`) : require(`@/assets/images/stock__computer.jpg`)"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Badge from '@/components/BadgeComponent.vue';
import Button from '@/components/ButtonComponent.vue';
import { isMobile } from '../utils/index';

export default defineComponent({
  components: {
    Badge,
    Button,
  },
  data() {
    return {
      mobile: false,
    };
  },
  created() {
    window.addEventListener('resize', this.handleIsMobile);
  },
  unmounted() {
    window.removeEventListener('resize', this.handleIsMobile);
  },
  methods: {
    handleIsMobile() {
      this.mobile = isMobile();
    },
  },
});
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 80px;

  &__arrow {
    transform: scale(1.5);
    margin-left: 20px;
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

  &__line {
    margin-top: 60px;
    width: 100%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1));

    @include tablet {
      margin-top: 100px;
    }
  }

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

  &__skills {
    margin-top: 30px;
    text-align: left;
    line-height: 2.5;
    font-size: 0.9em;

    @include tablet {
      margin-top: 80px;
      text-align: right;
    }

    @include desktop {
      max-width: 90%;
      font-size: 1.2em;
      text-indent: 7em;
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

  &--stronger {
    font-weight: 700;
    color: $sidebar-color;
  }
}
</style>
