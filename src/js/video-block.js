document.addEventListener("DOMContentLoaded", function (){
	/*стр О ресурсе : запустить/остановить видео, */
	
	const videoContent = document.querySelectorAll('.video');
		
	if (videoContent.length>0) {
		for(let item of videoContent){

			const videoBtn = item.querySelector('.video-play-btn');
			const videoClip = item.querySelector('.video-frame');
			
			item.addEventListener('click', function (e) {
				
				if (videoClip.paused) {
					videoClip.play();
					videoBtn.style.opacity = "0";
					this.classList.add("active");
				} else {
					videoClip.pause();
					videoBtn.style.opacity = "1";
					this.classList.remove("active");
				} 
			}); 
		} 
	}
	
});
