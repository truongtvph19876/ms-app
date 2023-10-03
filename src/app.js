import msData from './data/data.json' assert { type: "json" };
import { msIcon } from './include.js';
// get dom element
const rootApp = document.querySelector('#root');
const msContainer = rootApp.querySelector('#ms-container')

const { list } = msData;

// ms state
const msState = false;

const msContainerData = list.map((item, index)=> {
     return `<li data-ms-id=${item.id}># ${index + 1} ${item.msName}</li>`;
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
          
          const msSrc = `${msRootPath}${audioProperty.src}.${audioProperty.msExt}`;
          currentAudio.src = msSrc;
          currentAudio.play();
     })
})


// const stateElement = document.querySelector('#state');
// stateElement.innerHTML=msIcon.play;

