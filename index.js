import { catsData } from './data.js'

// This is the visible list of moods.
const emotionRadios = document.getElementById('emotion-radios')

getEmotionsArray(catsData)

renderEmotionsRadios(catsData)

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

// Creates HTML and prints to screen
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
