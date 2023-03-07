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
      closeIcon: './img/closeMenu.png',
      summary: ['CANOPY', 'Back End Dev', '2015'],
      dot: 'img/counter.png',
      image: 'img/portfolio02.jpg',
      deskImage: 'img/portfolio02.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Ruby', 'Bootstrap'],
      divider: 'img/divider.png',
      live: 'https://uuukiiiyooo.github.io/',
      liveLogo: 'req/live-icon.svg',
      source: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
      sourceLogo: 'req/github-blue.svg',
    },
    {
      name: 'Tonic',
      closeIcon: 'img/closeMenu.png',
      summary: ['CANOPY', 'Back End Dev', '2015'],
      dot: 'img/counter.png',
      image: 'img/portfolio02.jpg',
      deskImage: 'img/portfolio02.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Ruby', 'Bootstrap'],
      divider: 'img/divider.png',
      live: 'https://uuukiiiyooo.github.io/',
      liveLogo: 'req/live-icon.svg',
      source: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
      sourceLogo: 'req/github-blue.svg',
    },
    {
      name: 'Tonic',
      closeIcon: 'img/closeMenu.png',
      summary: ['CANOPY', 'Back End Dev', '2015'],
      dot: 'img/counter.png',
      image: 'img/portfolio02.jpg',
      deskImage: 'img/portfolio02.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Ruby', 'Bootstrap'],
      divider: 'img/divider.png',
      live: 'https://uuukiiiyooo.github.io/',
      liveLogo: 'req/live-icon.svg',
      source: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
      sourceLogo: 'req/github-blue.svg',
    },
    {
      name: 'Tonic',
      closeIcon: 'img/closeMenu.png',
      summary: ['CANOPY', 'Back End Dev', '2015'],
      dot: 'img/counter.png',
      image: 'img/portfolio02.jpg',
      deskImage: 'img/portfolio02.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Ruby', 'Bootstrap'],
      divider: 'img/divider.png',
      live: 'https://uuukiiiyooo.github.io/',
      liveLogo: 'req/live-icon.svg',
      source: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
      sourceLogo: 'req/github-blue.svg',
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
            <div>${worksData[0].summary[0]}</div>
            <img alt="" src="${worksData[0].dot}">
            <div>${worksData[0].summary[1]}</div>
            <img alt="" src="${worksData[0].dot}">
            <div>${worksData[0].summary[2]}</div>
        </li>
        </ul>
    </div>
    <div class="popImage">
        <img src="${worksData[0].image}">
    </div>
    <div>${worksData[0].description}</div>
    `;
    body.appendChild(popBg);
    popBg.appendChild(popBox);
    popBox.appendChild(popContent);

    const closePopup = document.querySelector('.closeIcon');
    closePopup.addEventListener('click', function() {
        body.removeChild(popBg);
    });
})