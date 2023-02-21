let audio = new Audio('audio/soundtrack.mp3')
		let audio__btn = document.querySelector('.btn__sound')
		let audio__icon = document.querySelector('.btn__sound i')

		audio.muted = true;
		audio.autoplay = true;
		audio.volume = 0.2

		audio.addEventListener('loadmetadata', function() {
			audio.currentTime = 0 + Math.random() * (audio.duration + 1 - 0)
		})

		audio__btn.addEventListener('click', function() {
			if(audio.muted) {
				audio.muted = false
				audio__icon.classList.add('fa-volume-up')
				audio__icon.classList.remove('fa-volume-off')
			} else if(!audio.muted) {
				audio.muted = true
				audio__icon.classList.add('fa-volume-off')
				audio__icon.classList.remove('fa-volume-up')
			}
		})