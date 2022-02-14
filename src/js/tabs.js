document.addEventListener("DOMContentLoaded", function (){
	/*=====табы Поиск Региона ===== */
	const customTabs = document.querySelectorAll('[custom-tabs]');
	if(customTabs.length > 0){
		for(let item of customTabs){
			
			const ctBtns = item.querySelectorAll('[ct-btn]');
			const ctContents = item.querySelectorAll('[ct-content]');
			
			for(let i=0; i< ctBtns.length; i++){
				 ctBtns[i].addEventListener('click', function(){
					for(let j=0; j< ctBtns.length;j++){
						if(j!=i){
							 ctBtns[j].classList.remove('custom-tab--current');
						}
						else{
							const thisData =  this.getAttribute('ct-btn');
							 this.classList.add('custom-tab--current');
						

							for(let content of ctContents){
								content.classList.remove('ct-content--active');
								const contentData = content.getAttribute('ct-content');
								if(contentData == thisData){
									content.classList.add('ct-content--active');
								}
							}
						}

					}
					
				});
			}
		}
	}
});
