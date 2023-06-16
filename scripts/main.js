const content = document.querySelector('.content');
const loadingOverlay = document.querySelector('.loading-overlay');
const navLinks = document.querySelector('.nav__links');
const navToggle = document.getElementById('nav-toggle');
const sections = document.querySelectorAll('section');
const navContact = document.querySelector('#nav-contact');
const nav = document.querySelector('.nav');

setTimeout(() => {
  content.classList.add('appear');
  loadingOverlay.classList.add('dissappear');
}, 2000);

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('toggled');
  navToggle.classList.toggle('toggled');
});

for(let i =0; i<navLinks.children.length;i++){
  navLinks.children[i].addEventListener('click', ()=>{
    navLinks.classList.toggle('toggled');
    navToggle.classList.toggle('toggled');
  })
}

const observer = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      if(entry.target.id !== "home" ){
        navContact.style.opacity = "1";
        navContact.style.pointerEvents = "unset";
        nav.classList.add('bg-toggle')
      }
      else{
        navContact.style.opacity = "0";
        navContact.style.pointerEvents = "none";
        nav.classList.remove('bg-toggle')
      }
      entry.target.classList.add('visible');
      document.getElementById(`${entry.target.id}-link`).classList.add('visible')
    }
    else{
      document.getElementById(`${entry.target.id}-link`).classList.remove('visible')
      // entry.target.classList.remove('visible');
    }
  });
}, {
  rootMargin: "-50% 0px -50% 0px ",
  // threshold: 0.25
})

sections.forEach(section=>{
  observer.observe(section)
})

// Experiences
let selectedExperience = 0;
const experiences = [
  `
    <div class="experience__title">
        Software Engineer @ <span>Société Générale</span>
    </div>
    <div class="experience__duration">
        June 2022 - March 2023
    </div>
    <ul>
        <li>
          Converted design system to reusable components with tools and technologies provided by the company.
        </li>
        <li>
            Designed the project directory structure and introduced coding standards like SOLID design principles and BEM conventions that improved the maintainability of the code and increased the ease of integration
        </li>
        <li>
            <span>Languages, Tools and Technologies : </span> Java, HTML, CSS, JavaScript, BootStrap, Angular, NodeJs, Postgre SQL
        </li>
    </ul>
  `,
  `
  <div class="experience__title">
        Front End developer @ <span>Peblio</span>
    </div>
    <div class="experience__duration">
        Jul 2020 - Sep 2020
    </div>
    <ul>
        <li>
          Converted design system to reusable components with tools and technologies provided by the company.
        </li>
        <li>
            Wrote styles for the same with scss following BEM conventions.
        </li>
        <li>
            Coded actions and reducers for redux stores that links components and enables efficient flow of data between the components
        </li>
        <li>
            Wrote unit tests for the components and integration tests to ensure the proper working of the application.
        </li>
        <li>
            Worked with backend developer on integration.
        </li>
        <li>
            <span>Tools and Technologies : </span> React.js, Redux, (s)css, Jest, REST APIs, webpack, storybook, Git and Github
        </li>
    </ul>
  `
]
const experienceGrid = document.querySelector('.experience__grid');
const experienceDetails = document.createElement('div');
experienceDetails.classList.add('experience__details');
experienceDetails.innerHTML = experiences[selectedExperience]
experienceGrid.appendChild(experienceDetails);
const experienceButtons = document.querySelectorAll('.experience__button');

experienceButtons.forEach((experience, index) => {
  experience.addEventListener('click', () => {
    experienceButtons[selectedExperience].classList.remove('selected');
    selectedExperience = index;
    experienceDetails.innerHTML = experiences[selectedExperience]
    experienceGrid.appendChild(experienceDetails);
    experience.classList.add('selected');
  });
})
