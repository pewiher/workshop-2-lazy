const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImage = (entry) => {
    const container = entry.target;
    const image = container.querySelector("img")
    const url = image.dataset.src
    image.src = url

    // image.onload = function () {
    // }
    //debugger
    console.log("holis")

    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
});


export const registerImage = (image) => {
    observer.observe(image)
}
