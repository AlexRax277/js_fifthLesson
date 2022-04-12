const timer = document.getElementById('timer')

const t = setInterval(() => {
    timer.textContent = Number(timer.textContent) - 1
    if(timer.textContent <= 0) {
        clearInterval(t)
        alert('Вы победили в конкурсе!')
    }
}, 100)






