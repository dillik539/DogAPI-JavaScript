//Random dog picture api: https://dog.ceo/api/breeds/image/random

const dogAPI = 'https://dog.ceo/api/breeds/image/random'
const dogDiv = document.getElementById('dogImage')

const getButton = document.getElementById('dogButton')
const getDogPicture = () => {fetch(dogAPI)
.then(response => response.json())
.then(json => {
    dogDiv.innerHTML = `<img src = '${json.message}' style = "height:600px; width:800px; border:none; border-radius:1rem;"/>`
})}

getButton.onclick = () => getDogPicture()