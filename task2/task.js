const cookie = document.getElementById('cookie')
const clicker__counter = document.getElementById('clicker__counter')



cookie.addEventListener('click', () => {
    if (cookie.width <= 200) {
        cookie.width += 10
        cookie.height += 10
        clicker__counter.textContent = Number(clicker__counter.textContent) + 1
    } else {
        cookie.width -= 10
        cookie.height -= 10
    }
        
})
