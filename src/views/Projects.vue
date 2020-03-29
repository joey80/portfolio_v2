<template>
  <div class="projects">
    <h1>Projects</h1>
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
              <joey-badge :key="elm" type="project">
                {{ elm }}
              </joey-badge>
            </template>
          </div>
        </div>
        <div :class="item.imageURL" class="projects__container__right" />
      </div>
    </template>
  </div>
</template>

<script>
import Badge from '../components/Badge/Badge.vue';
import { Data } from '../assets/data/projects.data';

export default {
  components: {
    joeyBadge: Badge
  },
  data() {
    return {
      items: Data
    };
  }
};
</script>

<style lang="scss">
.projects {
  text-align: left;

  @include tablet {
    text-align: right;
  }

  &__line {
    margin: 40px 0 40px 0;
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

  &__container {
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #fff;
    width: 100%;
    background-color: fade-out($sidebar-color, 0.1);
    border-radius: 7px;
    margin-bottom: 60px;

    @include tablet {
      flex-direction: row;
    }

    &__left {
      flex-basis: 35%;
      padding: 3%;
      box-shadow: 43px 0px 31px -15px rgba(0, 0, 0, 0.46);
      z-index: 9;
    }

    &__right {
      flex-grow: 1;
      padding: 3%;
      min-height: 500px;
      background-image: url('~@/assets/images/trees.png');
      background-size: cover;
      background-position: bottom;

      @include tablet {
        height: initial;
      }
    }

    &__title {
      font-size: 1.8em;
      font-weight: 700;
      line-height: 1.4;

      @include tablet {
        font-size: 2em;
      }

      @include desktop {
        font-size: 2.5em;
      }
    }

    &__description {
      margin-top: 30px;
      line-height: 2.5;
      font-size: 0.8em;

      @include tablet {
        line-height: 2;
      }

      @include desktop {
        font-size: 1em;
      }
    }

    &__stack {
      margin-top: 30px;
      font-size: 1em;

      @include desktop {
        font-size: 1.2em;
      }
    }

    &--highlight {
      display: inline-block;
      background-color: fade-out($primary-color, 0.85);
      margin: 5px;
      padding: 6px;
      line-height: 1em;
      border-radius: 7px;
    }

    &__line {
      margin: 2px 0 20px 0;
      width: 100%;
      border: 0;
      height: 1px;
      background-color: fade-out(#fff, 0.8);
    }
  }

  &--stronger {
    font-weight: 700;
  }

  &--smaller {
    font-size: 2em;

    @include tablet {
      font-size: 1.3em;
    }

    @include desktop {
      font-size: 2em;
    }
  }

  a:link {
    position: relative;
    color: $primary-color;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    margin-right: 15px;
    font-size: 0.9em;

    @include tablet {
      margin-right: 10px;
    }

    @include desktop {
      margin-right: 20px;
      font-size: 1em;
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $secondary-color;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
  }
  a:visited {
    color: $primary-color;
  }

  a:active {
    color: $primary-color;
  }

  a:hover {
    color: #fff;
    transition: all 0.3s ease-in-out;

    &:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
}

.tripsee {
  background-color: fade-out(#1fa224, 0.1);
  color: darken(#1fa224, 0.4);

  &__image {
    background-image: url('~@/assets/images/tripsee1.png');
    background-size: contain;
    background-position: top;
  }
}

.twiggle {
  background-color: fade-out(#041125, 0.1);
  color: #fff;

  &__image {
    background-image: url('~@/assets/images/twiggle.png');
    background-size: cover;
    background-position: top;
    background-position-x: 30px;
  }
}

.creative {
  background-color: fade-out(#d91122, 0.1);
  color: #fff;

  &__image {
    background-image: url('~@/assets/images/creative.jpg');
    background-size: cover;
    background-position: top;
    background-position-x: 20px;
  }
}

.csv {
  background-color: fade-out(#d91122, 0.1);
  color: #fff;

  &__image {
    background-image: url('~@/assets/images/csv.jpg');
    background-size: cover;
    background-position: top;
    background-position-x: 20px;
  }
}

.joeyui {
  &__image {
    background-image: url('~@/assets/images/joeyui.png');
    background-size: cover;
    background-position: top;
    background-position-x: -230px;
  }
}

.realestate {
  &__image {
    background-image: url('https://user-images.githubusercontent.com/3519112/64209978-fd6d4800-ce6f-11e9-81ee-a320962cafb6.JPG');
    background-size: cover;
    background-position: top;
    background-position-x: -80px;
  }
}
</style>
