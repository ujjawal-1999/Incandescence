window.scrollTo(0,200)
document.querySelector('.buckets').addEventListener('click',function(){
	// document.querySelector('.border').style.display='block';
	document.querySelector('.pop_up').style.display='block';
	document.querySelector('.wheel_wrap').style.opacity='0.4';
	document.querySelector('.buckets').style.opacity='0.4';
	document.querySelector('.stand').style.opacity='0.4';

})
document.querySelector('.pop_up').addEventListener('click',function(){
	// document.querySelector('.border').style.display='none';
	document.querySelector('.pop_up').style.display='none';
	document.querySelector('.wheel_wrap').style.opacity='1';
	document.querySelector('.buckets').style.opacity='1';
	document.querySelector('.stand').style.opacity='1';

})