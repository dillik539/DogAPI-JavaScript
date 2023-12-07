/**
 * Random dog picture api: https://dog.ceo/api/breeds/image/random
*/
const dogAPI = 'https://dog.ceo/api/breeds/image/random'

/**
 * get div element from index.html file whose id is 'dogImage'
 */
const dogDiv = document.getElementById('dogImage')

/**
 * get div element from index.html file whose id is 'dogButton'
 */
const getButton = document.getElementById('dogButton')
/**
 * This function requests the server through api to get a random picture of a dog. First,
 * it fetches the response from the server, then converts it into json object, and then
 * get the value of key-value pair, which is the url of the dog's picture. This url, will
 * be the source of image element.
 */
const getDogPicture = () => {fetch(dogAPI)
.then(response => response.json())
.then(json => {
    dogDiv.innerHTML = `<img src = '${json.message}' style = "height:600px; width:800px; border:none; border-radius:1rem;"/>`
})}
/**
 * This calls the function when the getButton button element is clicked each time.
 */
getButton.onclick = () => getDogPicture()