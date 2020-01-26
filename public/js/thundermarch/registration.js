               
$(document).ready(function() {
	$(".f4,.f5,.f6,.f7").hide()
	$(".b3").click(()=>{
		$(".b3").hide()
		$(".f4").show()
	})
	$(".b4").click(()=>{
		$(".b4").hide()
		$(".f5").show()
	})
	$(".b5").click(()=>{
		$(".b5").hide()
		$(".f6").show()
	})
	$(".b6").click(()=>{
		$(".b6").hide()
		$(".f7").show()
	})
})