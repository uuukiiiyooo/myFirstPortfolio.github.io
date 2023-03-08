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
      image: 'img/popDesk.jpg',
      deskImage: 'img/portfolio02.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
      technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
      divider: 'img/divider.png',
      live: 'https://uuukiiiyooo.github.io/',
      liveIcon: 'img/liveIcon.svg',
      source: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
      sourceIcon: 'img/githubIcon.svg',
    },
    {
      name: 'Tonic',
      closeIcon: 'img/closePop.png',
      summary: ['CANOPY', 'Back End Dev', '2015'],
      dot: 'img/counter.png',
      image: 'img/portfolio02.jpg',
      deskImage: 'img/portfolio02.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
      technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
      divider: 'img/divider.png',
      live: 'https://uuukiiiyooo.github.io/',
      liveIcon: 'img/liveIcon.svg',
      source: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
      sourceIcon: 'img/githubIcon.svg',
    },
    {
      name: 'Tonic',
      closeIcon: 'img/closePop.png',
      summary: ['CANOPY', 'Back End Dev', '2015'],
      dot: 'img/counter.png',
      image: 'img/portfolio02.jpg',
      deskImage: 'img/portfolio02.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
      technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
      divider: 'img/divider.png',
      live: 'https://uuukiiiyooo.github.io/',
      liveIcon: 'img/liveIcon.svg',
      source: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
      sourceIcon: 'img/githubIcon.svg',
    },
    {
      name: 'Tonic',
      closeIcon: 'img/closePop.png',
      summary: ['CANOPY', 'Back End Dev', '2015'],
      dot: 'img/counter.png',
      image: 'img/portfolio02.jpg',
      deskImage: 'img/portfolio02.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
      technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
      divider: 'img/divider.png',
      live: 'https://uuukiiiyooo.github.io/',
      liveIcon: 'img/liveIcon.svg',
      source: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
      sourceIcon: 'img/githubIcon.svg',
    },
  ];


const worksButton = document.querySelector('.worksButton');
worksButton.addEventListener('click', function() {
    const popBg = document.createElement('div');
    popBg.className = 'popBg';
    const popBox = document.createElement('div');
    popBox.className = 'popBox';
    const popContent = document.createElement('content')
    popContent.innerHTML = `
    <div class="popHeader">
        <h3>${worksData[0].name}</h3>
        <img class="closeIcon" src="${worksData[0].closeIcon}">
    </div>
    <div class="popSummary">
        <ul>
        <li>
            <div class="summaryContent">${worksData[0].summary[0]}</div>
            <img class="summaryContent" alt="" src="${worksData[0].dot}">
            <div class="summaryContent">${worksData[0].summary[1]}</div>
            <img class="summaryContent" alt="" src="${worksData[0].dot}">
            <div class="summaryContent">${worksData[0].summary[2]}</div>
        </li>
        </ul>
    </div>
    <div class="popImage">
        <img src="${worksData[0].image}">
    </div>
    <div class="descriptionContainer">
        <div class="popDescription">${worksData[0].description}</div>
        <div class="descriptionColumn">
            <div class="popTechnologies">
                <ul>
                <li>
                    <p>${worksData[0].technologies[0]}</p>
                </li>
                <li>
                    <p>${worksData[0].technologies[1]}</p>
                </li>
                <li>
                    <p>${worksData[0].technologies[2]}</p>
                </li>
                </ul>
            </div>
            <div class="divider"><img src="${worksData[0].divider}"></div>
            <div class="popButtons">
                <button>See live <img src="${worksData[0].liveIcon}"></button>
                <button>See Source <img src="${worksData[0].sourceIcon}"></button>
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
})