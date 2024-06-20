import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

// Notes
// Listens for whatever radio is chosen. 
// Using 'change' instead of 'click' bc the id will apply to the whole div, not just the radio.
// We don't use the () in a named function inside an event listener bc if we did, it would try to invoke it immediately.

emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName('radio')
  for (let radio of radios) {
    radio.classList.remove('highlight')
  }
  document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

// returns an array of cat objects that matches the user's criteria. 
function getMatchingCatsArray() {
  console.log(`*** matchingCatsArray, called fr getSingleCatObject ***`);

  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
    const isGif = gifsOnlyOption.checked

    const matchingCatsArray = catsData.filter(function (cat) {

    if (isGif) {
        console.log(`gifs only for ${selectedEmotion}`);
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif
    }
    else {
        return cat.emotionTags.includes(selectedEmotion)
      }
    })
    return matchingCatsArray
  }
}

// return a single cat object selected from the array provided by getMatchingCatsArray.
function getSingleCatObject() {

  const catsArray = getMatchingCatsArray()

  if (catsArray.length === 1) {
    console.log(catsArray[0]);
  }
  else {
    console.log(`length of array is ${catsArray.length}`);
  }
}

// uses the cat object provided by getSingleCatObject   // to create HTML string which it will render it to the dom.
function renderCat() {
  console.log(`renderCat`);

  getSingleCatObject() // temporary
}

function getEmotionsArray(cats) {
  const emotionsArray = []
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
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




