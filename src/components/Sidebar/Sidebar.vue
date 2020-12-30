<template>
  <aside class="sidebar">
    <div class="sidebar__links">
      <ul>
        <li>
          <router-link to="/" aria-label="home">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/projects" aria-label="projects">
            Projects
          </router-link>
        </li>
        <li>
          <router-link to="/about" aria-label="about">
            About
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar__quote">
      I'm a creative and passionate full-stack developer that looks forward to taking on new
      challenges and to
      <span class="sidebar--stronger">never stop learning new things</span>
    </div>
    <div class="sidebar__social">
      <ul>
        <li>
          check out my
          <span class="sidebar--stronger">
            <a href="https://github.com/joey80" aria-label="github" rel="noopener" target="_blank">GitHub</a>
          </span>
        </li>
        <li>
          connect with me on
          <span class="sidebar--stronger">
            <a href="https://www.linkedin.com/in/joey-leger-363715a5/" aria-label="linkedIn" rel="noopener" target="_blank">
              LinkedIn
            </a>
          </span>
        </li>
      </ul>
    </div>
    <div class="sidebar__avatar" />
  </aside>
</template>

<style lang="scss">
.sidebar {
  flex-basis: 30%;
  order: 2;
  background-color: $sidebar-color;
  background-image: url('~@/assets/images/trees.png');
  background-position: bottom;
  background-repeat: no-repeat;
  color: #fff;
  padding: 3%;

  @include tablet {
    order: 1;
    max-width: 30%;
    min-width: 30%;
  }

  &__links {
    position: absolute;
    width: 100%;
    padding: 10px 0 10px 0;
    background-color: $sidebar-color;
    top: 0;
    left: 0;
    font-family: 'Coustard', serif;
    font-size: 1.4em;
    font-weight: 300;

    @include tablet {
      position: static;
      padding: 0;
      font-size: 1.1em;
      background-color: transparent;
    }

    @include desktop {
      font-size: 1.6em;
    }
  }

  &__quote {
    margin-top: 30px;
    font-style: italic;
    font-weight: 300;
    font-size: 0.9em;
    text-align: center;

    @include tablet {
      margin-top: 20px;
      font-size: 0.8em;
    }

    @include desktop {
      margin-top: 30px;
      font-size: 1.2em;
    }
  }

  &__social {
    margin-top: 20px;
    font-weight: 300;
    font-size: 1em;
    color: $sidebar-color;
    text-transform: capitalize;
    text-align: center;

    @include tablet {
      color: #fff;
      margin-top: 30px;
      font-size: 0.8em;
    }

    @include desktop {
      margin-top: 60px;
      font-size: 1.3em;
    }

    & ul {
      display: block !important;
    }
  }

  &__avatar {
    margin: 60px auto 20px auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid #fff;
    background-image: url('~@/assets/images/me.jpg');
    background-position: bottom;
    background-size: contain;
    box-shadow: 0px 30px 18px 0px rgba(0, 0, 0, 0.3);

    @include tablet {
      width: 175px;
      height: 175px;
    }

    @include desktop {
      margin-top: 80px;
      width: 300px;
      height: 300px;
    }
  }

  &--stronger {
    font-weight: 700;
  }

  & ul {
    max-width: 80%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0 auto;

    @include tablet {
      flex-direction: column;
    }

    @include desktop {
      flex-direction: row;
      max-width: 90%;
    }
  }

  & ul li {
    display: inline-block;

    @include tablet {
      display: block;
    }

    @include desktop {
      display: inline-block;
    }
  }

  a:link {
    position: relative;
    color: $primary-color;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

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
</style>
