import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')



memeModalCloseBtn.addEventListener('click', closeModal)

emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', renderCat)


function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName('radio')
  for (let radio of radios) {
    radio.classList.remove('highlight')
  }
  document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function closeModal() {
  memeModal.style.display = "none"
}

// uses cat object fr getSingleCatObject() to create HTML string for image
function renderCat() {
  const catObject = getSingleCatObject()

  memeModalInner.innerHTML =
    `<img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >`
  memeModal.style.display = "flex"
}

// returns an array of cat objects that matches the user's selected emotion and gif/jpg choice. 
function getMatchingCatsArray() {

  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
    const isGif = gifsOnlyOption.checked

    const matchingCatsArray = catsData.filter(function (cat) {

      if (isGif) {
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
    return catsArray[0]
  }
  else {
    const randomNumber = Math.floor(Math.random() * catsArray.length)

    return catsArray[randomNumber]
  }
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
        name="emotions"
        >
      </div>`
  }
  emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
