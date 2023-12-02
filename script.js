//Random dog picture api: https://dog.ceo/api/breeds/image/random

const dogAPI = 'https://dog.ceo/api/breeds/image/random'
const dogDiv = document.getElementById('dogImage')
//dogDiv.innerText = 'Hello Saanvi and Shivani, How are you? I am going to Market.'

const getButton = document.getElementById('dogButton')

const getDogPicture = () => {fetch(dogAPI)
.then(response => response.json())
.then(json => {
    dogDiv.innerHTML = `<img src = '${json.message}' height = 350 width = 400/>`
})}

getButton.onclick = () => getDogPicture()