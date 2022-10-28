/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from "./lazy"

const containerImage = document.querySelector("#images")
const addbutton = document.querySelector('#add')
const clearbutton = document.querySelector('#clear')

const max = 122
const min = 1

const randomBox = () => Math.floor(Math.random() * (max - min)) + min
const action = () => {
    const newImage = createImageNode()
    containerImage.appendChild(newImage)
    registerImage(newImage)
}

const clearAction = () => containerImage.innerHTML = ""


const createImageNode = () => {
    const div = document.createElement('div')
    div.classList.add("p-4")

    const image = document.createElement('img')
    image.className = "mx-auto rounded-md bg-gray-300";
    image.setAttribute("width", "300")
    image.dataset.src = `https://randomfox.ca/images/${randomBox()}.jpg`
    image.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    div.appendChild(image)
    return div
}

if (addbutton && containerImage) {
    addbutton.addEventListener("click", action);
    clearbutton.addEventListener("click", clearAction)
}