const container = document.querySelector(".career_slider")
document.querySelector(".career_vector_left").addEventListener("click", (e) => {
    e.preventDefault()
    container.scrollTo({
        top: 0,
        left: container.scrollLeft - 200,
        behavior: "smooth"
    })
})
document.querySelector(".career_vector_right").addEventListener("click", (e) => {
    e.preventDefault()
    container.scrollTo({
        top: 0,
        left: container.scrollLeft + 200,
        behavior: "smooth"
    })
})