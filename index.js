import { catsData } from './data.js'

// This is the visible list of moods.
const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

getEmotionsArray(catsData)
renderEmotionsRadios(catsData)


// Notes
// Listens for whatever radio is chosen. 
// Using 'change' instead of 'click' bc the id will apply to the whole div, not just the radio.
// We don't use the () in a named function inside an event listener bc if we did, it would try to invoke it immediately.

emotionRadios.addEventListener('change', highlightCheckedOption)
getImageBtn.addEventListener('click', getMatchingCatsArray)
gifsOnlyOption.addEventListener('change', function () {
  // do I need anything inside this event listener???
  console.log(`gifsOnlyOption checked? ${gifsOnlyOption.checked}`);
})

// Gets full list from data.js and filters out dupes
function getEmotionsArray(cats) {

  const emotionsArray = []
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!(emotionsArray.includes(emotion))) {
        emotionsArray.push(emotion)
      }
    }
  }
  return emotionsArray
}

function renderEmotionsRadios(cats) {

  let radioItems = ``
  const emotions = getEmotionsArray(cats)
  for (let emotion of emotions) {
    radioItems += `
      <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input 
        type="radio" 
        id="${emotion}" 
        value="${emotion}" 
        name="emotions">
      </div>`
  }
  emotionRadios.innerHTML = radioItems
}

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName('highlight')
  for (let radio of radios) {
    radio.classList.remove('highlight')
  };
  document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray() {
  const radios = document.getElementsByClassName('highlight')
  const isGifsOnlySelected = gifsOnlyOption.checked

  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
    console.log(`selected ${selectedEmotion}`);
  }

  if (isGifsOnlySelected) {
    // return array of ONLY gifs from that mood
    console.log(`Only returning gifs.`)
  }
  else {
    console.log(`Returning gifs and stills.`);
    // return array of ALL images from that mood
  }
}

