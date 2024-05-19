import { catsData } from "./data.js"

const emotionRadios = document.getElementById("emotion-radios")

function getEmotionsArray(cats) {
  const emotionsArray = []
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArray.push(emotion)
    }
  }
  return emotionsArray
}

getEmotionsArray(catsData)

function renderEmotionsRadios(cats) {
  createEmotionRadio(cats)
}

function createEmotionRadio(cats) {
  let emotionRadioDiv = document.getElementById("emotion-radio-div")
  let radioInput = ""
  let emotionLabel = ""
  const emotions = getEmotionsArray(cats)
  for (let emotion of emotions) {
    console.log(emotion)
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
    emotionLabel.innerHTML = emotion
    emotionRadios.appendChild(emotionRadioDiv)
    emotionRadioDiv.appendChild(radioInput)
    emotionRadioDiv.appendChild(emotionLabel)
  }
}

renderEmotionsRadios(catsData)
