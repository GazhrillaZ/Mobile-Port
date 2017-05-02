$(document).ready(function(){
	var num = $("#dol").val();
	var mon = $("#mon").val();
	$("#dol").change(function(){
		num = $(this).val();
		console.log(num);
	});
	$("#mon").change(function(){
		mon = $(this).val();
		console.log(mon);
	});
	console.log(num);
	console.log(mon);
	$("#chc").click(function(){
		var outnum ;
		if (mon == 1) {
			outnum = num * mon * 0.008;
			console.log(outnum);
			$(".out").text(outnum);
		}
		else if (mon == 2) {
			outnum = num * mon * 0.009;
			console.log(outnum);
			$(".out").text(outnum);
		}
		else if (mon == 3) {
			outnum = num * mon * 0.01;
			console.log(outnum);
			$(".out").text(outnum);
		}
		else if (mon == 6) {
			outnum = num * mon * 0.0105;
			console.log(outnum);
			$(".out").text(outnum);
		}
		else if (mon == 9) {
			outnum = num * mon * 0.0107;
			console.log(outnum);
			$(".out").text(outnum);
		}
		else if (mon == 12) {
			outnum = num * mon * 0.011;
			console.log(outnum);
			$(".out").text(outnum);
		}
		
	});
	
})
