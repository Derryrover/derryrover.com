resizeAction = () => {
	var width  = window.innerWidth
	var height = window.innerHeight
	var divSvg = document.getElementById('svg')

 if (width > height) {
	divSvg.style.height = '100%'
	divSvg.style.width  = height + 'px'
	}
	else {
	divSvg.style.height = width + 'px'
	divSvg.style.width  = '100%'
	}

}

window.addEventListener('resize', resizeAction, false)
