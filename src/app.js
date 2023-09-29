import msData from './data/data.json' assert { type: "json" };

// get dom element
const rootApp = document.querySelector('#root');
const msContainer = rootApp.querySelector('#ms-container')

const { list } = msData;

const msContainerData = list.map((item)=> {
     return `<li data-ms-id=${item.id}>${item.msName}</li>`;
}).join('')

msContainer.innerHTML = msContainerData;

// get ms properties element
const listMs = msContainer.querySelectorAll('li[data-ms-id]');


const currentAudio = new Audio();
const msRootPath = 'data/storage/';
listMs.forEach((ms)=> {
     ms.addEventListener('click', (item) => {
          const msId = item.target.dataset.msId;
          const [audioProperty] = list.filter((item => item.id == msId));
          
          const msSrc = `${msRootPath}${audioProperty.msName}.${audioProperty.msExt}`;
          currentAudio.src = msSrc;
          currentAudio.play();
     })
})


