import { catsData } from "./data.js"

const emotionRadioDiv = document.getElementById("emotion-radios")

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
  const emotions = getEmotionsArray(cats)
  let emotionRadioHTML = ""
  for (let emotion of emotions) {
    console.log(emotion)
    emotionRadioHTML = document.createElement("p")
    emotionRadioHTML.innerHTML = emotion
    emotionRadioDiv.appendChild(emotionRadioHTML)
  }
}

renderEmotionsRadios(catsData)

