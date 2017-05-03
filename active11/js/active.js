//$(function() {
//	$.ajax({
//		type: "post",
//		url: "http://test.jkcmoney.com/app/index/splashScreen.html",
//		dataType: "json",
//		success: function(data) {
//			var shop = "";
//			var info = data.res_data.splashScreenList[0];
//			if(data.res_code == 9999) {
//          shop= '<li><img src="' + info.giftList.gift1 + '"></li><li><img src="' + info.giftList.gift2 + '"></li><li><img src="' + info.giftList.gift3 + '"></li><li><img src="' + info.giftList.gift4 + '"></li><li><img src="' + info.giftList.gift5 + '"></li>'
//              //console.log(info.giftList.gift+i+);
//			$(".slides").html(shop);
//			$(".switch").flexslider({
//			animation: "slide",
//			slideshowSpeed: 4000, //展示时间间隔ms
//			animationSpeed: 400, //滚动时间ms
//			slideshow: false,  
//			touch: true //是否支持触屏滑动
//		});
//			} else {
//				resmsg = data.res_msg;
//				display(resmsg);
//
//			}
//		}
//	});
//});
//
