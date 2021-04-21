import "./css/global.css"

const menuIcon = document.querySelector(".js-menu-icon")
const smallNav = document.querySelector(".js-small-nav")
const closeIcon = document.querySelector(".js-close-icon")

menuIcon.addEventListener("click", () => {
    smallNav.classList.add("open-menu")
})

closeIcon.addEventListener("click", () => {
    smallNav.classList.add("close-menu")
    const closeMenu = setTimeout(() => {
        smallNav.classList.remove("open-menu", "close-menu")
        clearTimeout(closeMenu)
    }, 250)
})
