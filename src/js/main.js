document.addEventListener("DOMContentLoaded", function (){
	/* 1. есть блоки с атрибутом data-modal  , они появляются по клику на блоки с атрибутом data-btn, появляются за счет добавления класса visible , закрываются по клику на элемент с атрибутом data-close.  При открыти  таких модалок, фиксируется body  и показывается overlay полупрозрачный . - Скрипт #1
	*/
	const overlayBg = document.querySelector('#overlay');
	const bodyEl = document.body;

	const formOpenButton = document.querySelectorAll('[data-btn]');
	const formsArray = document.querySelectorAll('[data-modal]');
	const formCloseBtn = document.querySelectorAll('[data-close]');

	// ===== - Скрипт #1 -  Показать модальное окно регистрации  ======

	for(let item of formOpenButton){
		item.addEventListener('click', function(e){
			
			e.preventDefault.default;
			let thisDataValue = item.dataset.btn;
			
			for(let i=0; i<formsArray.length; i++){
				
				let formDataValue = formsArray[i].dataset.modal;
				if(thisDataValue == formDataValue){
					formsArray[i].classList.add('visible');
					overlayBg.classList.add('active');
					bodyEl.classList.add('noscroll');
				}
			}

		});
	}

	// =====Закрыть модалку по клику на крестик ======
	for(let item of formCloseBtn){
		item.addEventListener('click', function(){
			item.closest('[data-modal]').classList.remove('visible');
			item.closest('[data-modal]').style.display = 'none';
			if(overlayBg){
				overlayBg.classList.remove('active');
			}
			bodyEl.classList.remove('noscroll');
			
		});
	}

	// ===== Закрыть модалку  по клику на фон-затемнение ======
	if(overlayBg){
		overlayBg.addEventListener('click', function(){
			for(let item of formsArray){
				item.classList.remove('visible');
				this.classList.remove('active');
				bodyEl.classList.remove('noscroll');
			}
		});
	}

	// ===== - Скрипт #2 -  Показать большое модальное окно стр категорий  ======
	const servCards = document.querySelectorAll('[data-serv-modal]');
	if(servCards.length > 0){

		const servDeskription = document.querySelector('#service-modal');
		const bigModalClose = document.querySelectorAll('[close-modal]');
		
		for(let item of servCards){
			item.addEventListener('click', ()=>{
				servDeskription.classList.add('visible');
				bodyEl.classList.add('noscroll');
			});
		}
		for(let item of bigModalClose){
			item.addEventListener('click', (e)=>{
				e.preventDefault();
				item.closest('[data-modal-frame]').classList.remove('visible');
				bodyEl.classList.remove('noscroll');
			});
		}
	}
	/*=======// ===== - Скрипт #3 -  ====== ТАБЫ========== */
	// $('.tabs-wrapper').each(function() {
	// 	let ths = $(this);
	// 	ths.find('.tab-item').not(':first').hide();
	// 	ths.find('.tab').click(function() {
	// 		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
	// 		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	// 	}).eq(0).addClass('active');
	// });

	/* по клику на карточку адреса показать окно modal-reestr p-121.html*/
	const addressItems = document.querySelectorAll('[data-address]');
	if(addressItems.length > 0){
		for(let i = 0; i < addressItems.length; i++){
			addressItems[i].addEventListener('click', (e)=>{
				
				e.preventDefault();
				for(let j = 0; j < addressItems.length; j++){
					
					if(j == i){
						if(addressItems[j].classList.contains('address-card--current')){
							addressItems[j].classList.remove('address-card--current');
							document.querySelector('#reestr-modal').classList.remove('right-modal--active');
						}
						else{
							document.querySelector('#reestr-modal').classList.add('right-modal--active');
							addressItems[j].classList.add('address-card--current')	;		
						}
					}
					else{
						addressItems[j].classList.remove('address-card--current');	
					}
				}
				
			});
		}
	}

	/* ==============показать модальные окна, типа ввести данные об объекте, авторизации такие модальные окна имеют атрибут frame-modal , кнопка, которая его показывает , имеет атрибут frame-btn, Чтобы закрыть такое окно, прописываем кнопке закрытия атрибут frame-close*/
	const modalFramesOpen = document.querySelectorAll('[frame-btn]');
	if( modalFramesOpen.length > 0){
		const modalFrames = document.querySelectorAll('[frame-modal]');
		const modalFramesClose = document.querySelectorAll('[frame-close]');
		for(let item of modalFramesOpen){
			item.addEventListener('click', function(e){
				e.preventDefault();
				const itemAttr = item.getAttribute('frame-btn');
				for(let frame of modalFrames){
					const frameAttr =frame.getAttribute('frame-modal');	
					if(frameAttr == itemAttr){
						frame.classList.add('visible');
						bodyEl.classList.add('noscroll');
					}
				}
			});
		}
		/*закрыть модалки с атрибутом frame-modal*/
		for(let item of modalFramesClose){
			item.addEventListener('click', function(e){
				e.preventDefault();
				item.closest('[frame-modal]').classList.remove('visible');
				bodyEl.classList.remove('noscroll');
			});
		}
	}
	//========большой сладер документов =======//
	let docSlider = new Swiper(".doc-slider", {
       slidesPerView: 1,
	   spaceBetween: 24,
       pagination: {
			el: ".doc-slider-pagination",
			clickable: true,
		},
		navigation: {
          nextEl: ".doc-slider-next",
          prevEl: ".doc-slider-prev",
        },
		speed:800,
		loop: true
      });

	//========слайдер Заказть проверку=======//
	let screeningSlider = new Swiper(".screening-slider", {
       slidesPerView: 1,
	   spaceBetween: 24,
       pagination: {
			el: ".scr-slider-pagination",
			clickable: true,
		},
		navigation: {
          nextEl: ".scr-slider-next",
          prevEl: ".scr-slider-prev",
        },
		speed:800
      });
	  

	  /**/
	  /*============video clip play ===========*/
	const videoContent = document.querySelectorAll('.video');
	if (videoContent) {
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
