import About from './About.vue';

const aboutTemplate = `
<div class="about">
    <h1>About Me</h1>
    <div class="about__line"></div>
    <div class="about__message">
      <p>I enjoy creating web apps and <span class="home--stronger">mobile-first responsive websites</span> that not only have a pleasing look but also are fast loading
      and cleanly coded. I'm very passionate about the user experience and getting the details just right. I've worked for various
      companies as a web developer and have freelanced for several years as well. During this time I'm spent time using various languages
      for the web including <span class="home__skills--highlight">Python</span>, <span class="home__skills--highlight">.NET</span>,
      <span class="home__skills--highlight">PHP</span>, <span class="home__skills--highlight">Javascript</span> along with
      <span class="home__skills--highlight">HTML</span> and <span class="home__skills--highlight">CSS</span>.
      I'm constantly striving to push myself past my limits and to learn as much as I possibly can. I try to live a life of
      continuous improvement where I never let myself get stagnant or feel that I've arrived at the top. I want to surround myself with people
      that are way more talented than myself to help push me even farther.</p>
      <p>Programming is my hobby but in my free time away from a keyboard I enjoy photography and spending time with my wife and two children.</p>
    </div>
    <img src=~images/about.jpg class="home__image" />
  </div>
`;

export const Default = () => ({
  components: { About },
  template: aboutTemplate
});
