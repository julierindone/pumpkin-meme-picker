import { catsData } from './data.js'

// This is the visible list of moods.
const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

// Notes
// Listens for whatever radio is chosen. 
// Using 'change' instead of 'click' bc the id will apply to the whole div, not just the radio.
// We don't use the () in a named function inside an event listener bc if we did, it would try to invoke it immediately.

emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', getMatchingCatsArray)

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName('radio')
  for (let radio of radios) {
    radio.classList.remove('highlight')
  }
  document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
    const isGif = gifsOnlyOption.checked

    if (isGif) {
      console.log(` gifs only.`);
      
      const matchingCatsArray = catsData.filter(function (cat) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif
      })
      console.log(matchingCatsArray)
    }
    else {
      const matchingCatsArray = catsData.filter(function (cat) {
        return cat.emotionTags.includes(selectedEmotion)
      })
    console.log(matchingCatsArray)
    }
  }
}

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

renderEmotionsRadios(catsData)




