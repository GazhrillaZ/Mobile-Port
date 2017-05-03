$(function() {
	$.ajax({
		type: "post",
		url: "http://test.jkcmoney.com/app/index/splashScreen.html",
		dataType: "json",
		success: function(data) {
			if(data.res_code == 9999) {
				var img = data.res_data.splashScreenList[0].picPath;
				$(".screen").css({
					'background-image': 'url(' + img + ')'
				});
				var time = 3;
				var codex = $(".screen span");
				validCode = false;
				var t = setInterval(function() {
					time--;
					codex.html(time);
					if(time <= 0) {
						codex.html("");
						//window.location.href = 'active.html';
					}
				}, 1000)
			} else {
				resmsg = data.res_msg;
				display(resmsg);

			}
		}
	});
});

