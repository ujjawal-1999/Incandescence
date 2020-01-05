window.scrollTo(0,190);
var sample = document.getElementById("foobar");

document.querySelector('.ferris_wheel').style.display='none';

document.querySelector('.scrolling-wrapper').addEventListener('mouseover',function(){
	document.querySelector('.scrolling-wrapper').style.opacity='1';
	setInterval(function(){
		sample.play();
	},6000);
})
document.querySelector('.scrolling-wrapper').addEventListener('mouseout',function(){
	document.querySelector('.scrolling-wrapper').style.opacity='0.4';
})


// window.addEventListener('mouseover',function(){
// 	setInterval(function(){
// 		sample.play();
// 	},6000);
// })





// document.querySelector('.ferris_wheel').addEventListener('click',function(){
// 	document.querySelector('.pop_up').style.display='block';
// 	document.querySelector('.ferris_wheel').style.top='120vh';
// 	document.querySelector('.ferris_wheel').style.left='165vh';
// 	document.querySelector('.ferris_wheel').style.zoom='0.75';
// 	window.scrollTo(0,190);
// })
// document.querySelector('.pop_up').addEventListener('click',function(){
// 	// document.querySelector('.border').style.display='none';
// 	document.querySelector('.pop_up').style.display='none';
// 	document.querySelector('.wheel_wrap').style.opacity='1';
// 	document.querySelector('.buckets').style.opacity='1';
// 	document.querySelector('.stand').style.opacity='1';
// 	document.querySelector('.ferris_wheel').style.top='50.5vh';
// 	document.querySelector('.ferris_wheel').style.left='29vh';
// 	document.querySelector('.ferris_wheel').style.zoom='1.4';
// 	window.scrollTo(0,205);
// })

