const body = document.querySelector('body');
const menuIcon = document.querySelector('.menuIcon');
const menuText = document.querySelector('.menuText');
const closeMenuButton = document.querySelector('#closeMenuButton');
const portfolioAnchor = document.querySelector('#portfolioMenuButton');
const aboutAnchor = document.querySelector('#aboutMenuButton');
const contactAnchor = document.querySelector('#contactMenuButton');

menuIcon.addEventListener("click", function() {
    menuText.classList.add('menuTextToggle');
})

closeMenuButton.addEventListener("click", function() {
    menuText.classList.remove('menuTextToggle');
})

portfolioAnchor.addEventListener("click", function() {
    menuText.classList.remove('menuTextToggle');
})

aboutAnchor.addEventListener("click", function() {
    menuText.classList.remove('menuTextToggle');
})

contactAnchor.addEventListener("click", function() {
    menuText.classList.remove('menuTextToggle');
})


const worksData = [
    {
        name: 'Tonic',
        closeIcon: './img/closePop.png',
        summary: ['CANOPY', 'Back End Dev', '2015'],
        dot: 'img/counter.png',
        image: 'img/portfolio01.jpg',
        deskImage: 'img/popDesk.jpg',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        popDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
        technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
        buttonText: 'See Project',
        divider: 'img/divider.png',
        liveLink: 'https://uuukiiiyooo.github.io/',
        liveIcon: 'img/liveIcon.svg',
        sourceLink: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
        sourceIcon: 'img/githubIcon.svg',
    },
    {
        name: 'Multi-Post Stories',
        closeIcon: './img/closePop.png',
        summary: ['CANOPY', 'Back End Dev', '2015'],
        dot: 'img/counter.png',
        image: 'img/portfolio02.jpg',
        deskImage: 'img/popDesk.jpg',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        popDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
        technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
        buttonText: 'See Project',
        divider: 'img/divider.png',
        liveLink: 'https://uuukiiiyooo.github.io/',
        liveIcon: 'img/liveIcon.svg',
        sourceLink: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
        sourceIcon: 'img/githubIcon.svg',
    },
    {
        name: 'Tonic',
        closeIcon: './img/closePop.png',
        summary: ['CANOPY', 'Back End Dev', '2015'],
        dot: 'img/counter.png',
        image: 'img/portfolio03.jpg',
        deskImage: 'img/popDesk.jpg',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        popDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
        technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
        buttonText: 'See Project',
        divider: 'img/divider.png',
        liveLink: 'https://uuukiiiyooo.github.io/',
        liveIcon: 'img/liveIcon.svg',
        sourceLink: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
        sourceIcon: 'img/githubIcon.svg',
    },
    {
        name: 'Multi-Post Stories',
        closeIcon: './img/closePop.png',
        summary: ['CANOPY', 'Back End Dev', '2015'],
        dot: 'img/counter.png',
        image: 'img/portfolio04.jpg',
        deskImage: 'img/popDesk.jpg',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        popDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
        technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
        buttonText: 'See Project',
        divider: 'img/divider.png',
        liveLink: 'https://uuukiiiyooo.github.io/',
        liveIcon: 'img/liveIcon.svg',
        sourceLink: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
        sourceIcon: 'img/githubIcon.svg',
    },
];


document.querySelector('#worksContent').innerHTML = worksData.map((projectData) => 
  `
  <div class="grid-item">
    <img alt="Preview of project" class="header-img-l" src="${projectData.image}" >
      <div class="postLeft">
        <h3>${projectData.name}</h3>
            
        <section class="details">
        <ul>
          <li>
            <div>${projectData.summary[0]}</div>
            <img alt="" src="${projectData.dot}">
            <div>${projectData.summary[1]}</div>
            <img alt="" src="${projectData.dot}">
            <div>${projectData.summary[2]}</div>
          </li>
        </ul>
        </section>

        <p class="worksText">${worksData[0].description}</p>

        <section class="worksTag">
          <ul>
            <li>${projectData.technologies[0]}</li>
            <li>${projectData.technologies[1]}</li>
            <li>${projectData.technologies[2]}</li>
          </ul>
        </section>
            
        <button class="worksButton">${projectData.buttonText}</button>
      </div>
  </div>
`,);



const openProjects = document.querySelectorAll('.worksButton');
openProjects.forEach(function (button, index) {
    button.addEventListener('click', function () {
    const projectData = worksData[index];
    const popBg = document.createElement('div');
    popBg.className = 'popBg';
    const popBox = document.createElement('div');
    popBox.className = 'popBox';
    const popContent = document.createElement('content');
    popContent.innerHTML = `
      <div class="popHeader">
        <h3>${projectData.name}</h3>
        <img class="closeIcon" src="${projectData.closeIcon}">
      </div>
      <div class="popSummary">
        <ul>
          <li>
            <div class="summaryContent">${projectData.summary[0]}</div>
            <img class="summaryContent" alt="" src="${projectData.dot}">
            <div class="summaryContent">${projectData.summary[1]}</div>
            <img class="summaryContent" alt="" src="${projectData.dot}">
            <div class="summaryContent">${projectData.summary[2]}</div>
          </li>
        </ul>
      </div>
      <div class="popImage"><img src="${projectData.image}"></div>
      <div class="popImageDesk"><img src="${projectData.deskImage}"></div>
      <div class="descriptionContainer">
        <div class="popDescription">${projectData.popDesc}</div>
        <div class="descriptionColumn">
          <div class="popTechnologies">
            <ul>
              <li>
                <p>${projectData.technologies[0]}</p>
              </li>
              <li>
                <p>${projectData.technologies[1]}</p>
              </li>
              <li>
                <p>${projectData.technologies[2]}</p>
              </li>
            </ul>
          </div>
          <div class="divider"><img src="${projectData.divider}"></div>
          <div class="popButtons">
            <button class="liveButton" onclick="window.open('${projectData.liveLink}','_blank')">See live <img src="${projectData.liveIcon}"></button>
            <button class="sourceButton" onclick="window.open('${projectData.sourceLink}','_blank')">See Source <img src="${projectData.sourceIcon}"></button>
          </div>
        </div>
      </div>
    `;
    body.appendChild(popBg);
    popBg.appendChild(popBox);
    popBox.appendChild(popContent);
    const closePopup = document.querySelector('.closeIcon');
    closePopup.addEventListener('click', function() {
        body.removeChild(popBg);
    });
  });
});

const form = document.querySelector('#form-contact');
const email = document.querySelector('#user-email');
const error = document.querySelector('#error-msg');
form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    error.innerHTML = 'Email must be in Lowercase';
    event.preventDefault();
    error.style.display = 'block';
  } else {
    error.innerHTML = '';
    error.display.style = 'none';
  }
});