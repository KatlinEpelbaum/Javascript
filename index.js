import chuckNorrisAPI from "./API/chuckNorrisAPI"


const randomJokeHTMLElement = document.querySelector(".randomJokes")
const categoriesHTMLElement = document.querySelector("#categories")
const buttomeElement = document.querySelector(".generateJokesButton")
const searchElement = document.querySelector("#search")
const searchResultWrapper = document.querySelector(".result")
const resultCountWrapper = document.querySelector(".result-count")

let selectedCategory = null;


const fetchRandomJokes = async (category = "") => {
    try {
        const response = await chuckNorrisAPI.get(`/random?catecory=${category}`)
    
        return response.data
    } catch (error) {
        throw new Error("Something went terriblely wrong!")
    }
}

const optionCategory = async () => {
    try {
        const response = await chuckNorrisAPI.get(`/categories`)
        return response.data
        
    } catch (error) {
        throw new Error("Something went terriblely wrong!")
    }
}

const displayRandomJoke = async () => {
    const joke = await fetchRandomJokes()
    randomJokeHTMLElement.textContent = joke.value
}

const fillSelectWithOptions = async () => {
    const categories = await optionCategory()

    if (!categories) return

    categories.forEach((category) => {
        const option = new Option(category, category)
        categoriesHTMLElement.append(option)
    })
}

categoriesHTMLElement.addEventListener("change", async (event) => {
    selectedCategory = event.currentTarget.value
    const response = await fetchRandomJokes(selectedCategory)
    randomJokeHTMLElement.textContent = response.value
})

buttomeElement.addEventListener("click", async (event) => {
    const response = await fetchRandomJokes(selectedCategory)
    randomJokeHTMLElement.textContent = response.value
})

searchElement.addEventListener("input", async  (event) => {
    if (event.currentTarget.value.length < 3) return
    
    const response = await searchQuery(event.currentTarget.value)
    console.log(response.resault)

    const resultCountPlural = response.total === 1 ? "joke" : "jokes"
    resultCountWrapper.innerText = `Found ${response.total} ${ resultCountPlural}.`
    
    response.result.forEach((joke) => {
        const jokeSpentElement = document.createElement("p");
        jokeSpentElement.innerText = joke.value
        resultCountWrapper.append(jokeSpentElement)
    })
})

const searchQuery = async (query) => {
    try {
        const response = await chuckNorrisAPI.get(`/search?query=${query}`);
        return response.data;
    } catch (error) {
        throw new Error("Search failed")
    }
}

fetchRandomJokes()
displayRandomJoke()
fillSelectWithOptions()
