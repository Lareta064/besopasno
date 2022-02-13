document.addEventListener("DOMContentLoaded", function (){
	/*стр О ресурсе : изменить размер шрифта в карточке Преимущества, если символов в текстебольше 200*/
	const variableFontSize = document.querySelectorAll('.variable-fz');
	if(variableFontSize.length > 0){
		for(let item of variableFontSize){
			const itemSymbolCount = item.innerHTML.length;
			if(itemSymbolCount > 200){
				item.classList.add('text-10');
			}
		}
	}
});
