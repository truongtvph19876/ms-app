const MsContainer = document.querySelector('#ms-container');

const listMs = MsContainer.querySelectorAll('li[data-ms]')

listMs.forEach((ms)=> {
     ms.addEventListener('click', (item) => {
          const audioPath = item.target.dataset.ms;
          console.log(audioPath);
          currentAudio.src=audioPath;
          currentAudio.play();
     })
})

const currentAudio = new Audio();

