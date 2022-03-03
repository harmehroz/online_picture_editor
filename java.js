

let myform = document.getElementById('myform');
let targetimage = document.getElementById('targetimage');
let inputrange = document.querySelectorAll('.slider');
myform.addEventListener('submit', function(e){
	let urlimage = document.getElementById('onlineurl');
	let urlimageval = urlimage.value;
	if(urlimageval.length)
	{	
	targetimage.setAttribute('src', urlimageval);
	urlimage.value = '';
	}

	e.preventDefault();
	console.log('done');
})
for(let i=0; i<=inputrange.length-1; i++)
{
	inputrange[i].addEventListener('input', editimage)
}

function editimage()
{
	let gs = document.getElementById('gs');
	let blur = document.getElementById('blur');
	let huerotate = document.getElementById('hue-rotate');
	let sepia = document.getElementById('sepia');
	let brightness = document.getElementById('brightness');
	let contrast = document.getElementById('contrast');
	let saturate = document.getElementById('saturate');
	let opacity = document.getElementById('opacity');

	let gsval = gs.value;
	let blurval = blur.value;
	let huerotateval = huerotate.value;
	let sepiaval = sepia.value;
	let brightnessval = brightness.value;
	let contrastval = contrast.value;
	let saturateval = saturate.value;
	let opacityval = opacity.value;

	targetimage.style.filter = 'grayscale(' + gsval + '%) blur(' + blurval + 'px) hue-rotate(' + huerotateval + 'deg) sepia(' + sepiaval + '%) brightness(' + brightnessval + '%) contrast(' + contrastval + '%) saturate(' + saturateval + '%) opacity(' + opacityval + '%)';
}



	let sliderform = document.getElementById('slider-form');
	sliderform.addEventListener('reset', function()
	{
		sliderform.reset();
		setTimeout(function()
		{
			editimage();
		},0)
	})


 


