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
        liveIcon: 'img/liveIcon.svg',
        sourceIcon: 'img/githubIcon.svg',
    },
    {
        name: 'Multi-Post Stories',
        closeIcon: './img/closePop.png',
        summary: ['CANOPY', 'Back End Dev', '2015'],
        dot: 'img/counter.png',
        image: 'img/portfolio02.jpg',
        deskImage: 'img/portfolio02.jpg',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        popDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
        technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
        buttonText: 'See Project',
        divider: 'img/divider.png',
        liveIcon: 'img/liveIcon.svg',
        sourceIcon: 'img/githubIcon.svg',
    },
    {
        name: 'Tonic',
        closeIcon: './img/closePop.png',
        summary: ['CANOPY', 'Back End Dev', '2015'],
        dot: 'img/counter.png',
        image: 'img/portfolio03.jpg',
        deskImage: 'img/portfolio03.jpg',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        popDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
        technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
        buttonText: 'See Project',
        divider: 'img/divider.png',
        liveIcon: 'img/liveIcon.svg',
        sourceIcon: 'img/githubIcon.svg',
    },
    {
        name: 'Multi-Post Stories',
        closeIcon: './img/closePop.png',
        summary: ['CANOPY', 'Back End Dev', '2015'],
        dot: 'img/counter.png',
        image: 'img/portfolio04.jpg',
        deskImage: 'img/portfolio04.jpg',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        popDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
        technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
        buttonText: 'See Project',
        divider: 'img/divider.png',
        liveIcon: 'img/liveIcon.svg',
        sourceIcon: 'img/githubIcon.svg',
    },
  ];


const worksContent = document.querySelector('#worksContent')
worksContent.innerHTML = `
    <section class="grid-container" id="portfolio-section">
        <div class="grid-item">
            <img alt="Preview of project A" class="header-img-l" src="${worksData[0].image}" >
            <div class="postLeft">
                <h3>${worksData[0].name}</h3>
                    
                <section class="details">
                <ul>
                    <li>
                        <div>${worksData[0].summary[0]}</div>
                        <img alt="" src="${worksData[0].dot}">
                        <div>${worksData[0].summary[1]}</div>
                        <img alt="" src="${worksData[0].dot}">
                        <div>${worksData[0].summary[2]}</div>
                    </li>
                </ul>
                </section>

                <p class="worksText">${worksData[0].description}</p>

                <section class="worksTag">
                    <ul>
                        <li>${worksData[0].technologies[0]}</li>
                        <li>${worksData[0].technologies[1]}</li>
                        <li>${worksData[0].technologies[2]}</li>
                    </ul>
                </section>
                    
                <button class="worksButton">${worksData[0].buttonText}</button>
            </div>
        </div>    
        <div class="grid-item">
            <div class="contentRight">
            <img alt="Preview of project B" class="header-img-r" src="${worksData[1].image}">
            
            <div class="postRight">
                <h3>${worksData[1].name}</h3>
                    
                <section class="details">
                    <ul>
                        <li>
                            <div>${worksData[1].summary[0]}</div>
                            <img alt="" src="${worksData[1].dot}">
                            <div>${worksData[1].summary[1]}</div>
                            <img alt="" src="${worksData[1].dot}">
                            <div>${worksData[1].summary[2]}</div>
                        </li>
                    </ul>
                </section>

                <p class="worksText">${worksData[1].description}</p>
                    
                <section class="worksTag">
                    <ul id="worksRight">
                        <li>${worksData[1].technologies[0]}</li>
                        <li>${worksData[1].technologies[1]}</li>
                        <li>${worksData[1].technologies[2]}</li>
                    </ul>
                </section>

                <button class="worksButton">${worksData[1].buttonText}</button>
            </div>
            </div>
        </div>

        <div class="grid-item">
            <img alt="Preview of project C" class="header-img-l" src="${worksData[2].image}" >

            <div class="postLeft">
                <h3>${worksData[2].name}</h3>
                
                <section class="details">
                    <ul>
                        <li>
                            <div>${worksData[2].summary[0]}</div>
                            <img alt="" src="${worksData[2].dot}">
                            <div>${worksData[2].summary[1]}</div>
                            <img alt="" src="${worksData[2].dot}">
                            <div>${worksData[2].summary[3]}</div>
                        </li>
                    </ul>
                </section>
                    
                <p class="worksText">${worksData[2].description}</p>
                    
                <section class="worksTag">
                    <ul>
                        <li>${worksData[2].technologies[0]}</li>
                        <li>${worksData[2].technologies[1]}</li>
                        <li>${worksData[2].technologies[2]}</li>
                    </ul>
                </section>

                <button class="worksButton">${worksData[2].buttonText}</button>    
            </div>
            
        </div>

        <div class="grid-item">
            <div class="contentRight">
            <img alt="Preview of project D" class="header-img-r" src="${worksData[3].image}" >
                
            <div class="postRight">
                <h3>${worksData[3].name}</h3>

                <section class="details">
                    <ul>
                        <li>
                            <div>${worksData[3].summary[0]}</div>
                            <img alt="" src="${worksData[3].dot}">
                            <div>${worksData[3].summary[1]}</div>
                            <img alt="" src="${worksData[3].dot}">
                            <div>${worksData[3].summary[2]}</div>
                        </li>
                    </ul>
                </section>

                <p class="worksText">${worksData[3].description}</p>

                <section class="worksTag">
                    <ul id="worksRight">
                        <li>${worksData[3].technologies[0]}</li>
                        <li>${worksData[3].technologies[1]}</li>
                        <li>${worksData[3].technologies[2]}</li>
                        </ul>
                    </section>

                <button class="worksButton">${worksData[3].buttonText}</button>
            </div>
            </div>
        </div>
    </section>
`;

const worksButton = document.querySelector('.worksButton');
worksButton.addEventListener('click', openPop);


function openPop() {
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
    <div class="popImage"><img src="${worksData[0].image}"></div>
    <div class="popImageDesk"><img src="${worksData[0].deskImage}"></div>
    <div class="descriptionContainer">
        <div class="popDescription">${worksData[0].popDesc}</div>
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
                <button class="liveButton" onclick=" window.open('https://uuukiiiyooo.github.io/','_blank')">See live <img src="${worksData[0].liveIcon}"></button>
                <button class="sourceButton" onclick=" window.open('https://github.com/uuukiiiyooo/uuukiiiyooo.github.io','_blank')">See Source <img src="${worksData[0].sourceIcon}"></button>
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
}