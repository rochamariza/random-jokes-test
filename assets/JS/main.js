const piada = document.querySelector('.setup')
const joke = document.querySelector('.piada')
const button = document.querySelector('.button')
const form = document.querySelector('.form')
form.addEventListener('submit', (event) =>
{
    event.preventDefault()
    fetchAPI()
    renderJoke()
})
const fetchAPI = async () => {
    
    const responseAPI = await fetch(`https://official-joke-api.appspot.com/jokes/random/`)
    const data = await responseAPI.json()
    return data

}
const renderJoke = async () => {

    const data = await fetchAPI()

    piada.innerHTML = data.setup;
    joke.innerHTML = data.punchline;

}

