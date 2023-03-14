var i = 0;
var intervalID = window.setInterval(myCallback, 4000);

function myCallback() {

	var images = $(".left > img");

	if(i < images.length-1) {
		i++;
	} else {
		i = 0;
	}

	$(images).each(function() {
		this.classList.add('hidden');
	});
	$(images)[i].classList.remove('hidden');

	/*let random_1 = randomIntFromInterval(0, imagesUrlArray[0].length-1);
	let random_2 = randomIntFromInterval(0, imagesUrlArray[0].length-1);
	
	if (random_2 == random_1) {
		while (random_2 == random_1) {
			random_2 = randomIntFromInterval(0, imagesUrlArray[0].length-1);
		}
	}

	$("figure > img")[0].src = imagesUrlArray[0][random_1].content.originalUrl;
	$(".theme")[0].innerText = imagesUrlArray[0][random_1].metadata.name.split('.')[0].split('-')[0];

	$("figure > img")[1].src = imagesUrlArray[0][random_2].content.originalUrl;
	$(".theme")[1].innerText = imagesUrlArray[0][random_2].metadata.name.split('.')[0].split('-')[0];*/
}