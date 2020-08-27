const timer = document.getElementById('time')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)
