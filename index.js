import { catsData } from "./data.js"

const emotionRadios = document.getElementById("emotion-radios")

getEmotionsArray(catsData)

renderEmotionsRadios(catsData)

emotionRadios.addEventListener("click", function (e) {
  // e.target.id(emotion)
  console.log(`clicked on ${e.target.id}`);
  
})

function getEmotionsArray(cats) {
  const emotionsArray = []
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArray.push(emotion)
    }
  }
  return emotionsArray
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats)
  let emotionsArray = []
  for (let emotion of emotions) {      
    if (!(emotionsArray.includes(emotion))) {
      emotionsArray.push(emotion)
      createEmotionRadio(cats, emotion)
    } // no need for else since nothing happens with it!
  }
}

function createEmotionRadio(cats,emotion) {
  let emotionRadioDiv = document.getElementById("emotion-radio-div")
  let radioInput = ""
  let emotionLabel = ""

  // create a div to hold each radio.
  emotionRadioDiv = document.createElement("div")
  emotionRadioDiv.className = "radio"

  // create an emotion input
  radioInput = document.createElement("input")
  radioInput.type = "radio"
  radioInput.id = emotion
  radioInput.value = emotion
  radioInput.name = "emotions"

  // create label - emotionLabel
  emotionLabel = document.createElement("label")
  emotionLabel.htmlFor = emotion
  emotionLabel.innerHTML = emotion

  // assemble the pieces:
  emotionRadios.appendChild(emotionRadioDiv)
  emotionRadioDiv.appendChild(emotionLabel)
  emotionRadioDiv.appendChild(radioInput)
}

