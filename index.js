import { catsData } from './data.js'

// This is the visible list of moods.
const emotionRadios = document.getElementById('emotion-radios')

getEmotionsArray(catsData)

renderEmotionsRadios(catsData)

// Listens for whatever radio is chosen. 
// Using 'change' instead of 'click' bc the id will apply to the whole div, not just the radio.
// We don't use the () in a named function inside an event listener bc if we did, it would try to invoke it immediately.
emotionRadios.addEventListener('change', highlightCheckedOption)

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
  console.log(`Contents of emotionsArray returned from getEmotionsArray: ${emotionsArray} `);

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
