<template>
  <div class="about">
    <h1>About Me</h1>
    <div class="about__line" />
    <div class="about__message">
      <p>
        I enjoy creating web apps and
        <span class="home--stronger">mobile-first responsive websites</span> that not only have a
        pleasing look but also are fast loading and cleanly coded. I'm very passionate about the
        user experience, accessibility and getting the details just right.
      </p>
      <p>
        During my career I've spent time using various languages including <joey-badge>Python</joey-badge>,
        <joey-badge>C#/.NET</joey-badge>, <joey-badge>PHP</joey-badge>,
        <joey-badge>Typescript/Javascript</joey-badge> along with <joey-badge>HTML</joey-badge> and
        <joey-badge>CSS</joey-badge>. I'm constantly striving to push myself past my limits and to
        learn as much as I possibly can. I try to live a life of continuous improvement where I
        never let myself get stagnant or feel that I've arrived at the top. I want to surround
        myself with people that are way more talented than myself to help push me even farther.
      </p>
      <p>
        Programming is my hobby but in my free time away from a keyboard I enjoy photography, gaming on my PC
        and spending time with my wife and two children.
      </p>
    </div>
    <img alt="laptop computer on table" src="~@/assets/images/about.jpg" class="home__image" />
  </div>
</template>

<script>
import Badge from '../components/Badge/Badge.vue'

export default {
  components: {
    joeyBadge: Badge,
  },
}
</script>

<style lang="scss">
.about {
  text-align: left;

  @include tablet {
    text-align: right;
  }

  &__title {
    font-size: 2em;
  }

  &__line {
    margin-top: 40px;
    width: 100%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 1)
    );

    @include tablet {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 1)
      );
    }
  }

  &__message {
    text-indent: 7em;
    margin-top: 40px;
    font-size: 0.8em;
    line-height: 2.5;

    @include tablet {
      font-size: 1em;
    }

    @include desktop {
      font-size: 1.3em;
    }
  }
}
</style>
