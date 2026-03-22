const heroBtn = document.querySelector(".hero-btn")
const overlay = document.querySelector(".overlay")
const modalCloseBtn = document.querySelector(".modal-close-btn")

heroBtn.addEventListener('click', () => {
    overlay.classList.add('is-open')
})

modalCloseBtn.addEventListener('click', () => {
     overlay.classList.remove('is-open')
})

