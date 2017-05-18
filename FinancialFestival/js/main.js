(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		};

	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//音乐自动播放
$(document).ready(function() {
	autoPlayMusic();
	audioAutoPlay();
	
	var aDish = $(".cd");
	var onOff = true;

	function audioPlay() {
		var audio = document.getElementById('bg-music');
		if(audio !== null) {
			//默认播放，false -暂停 ， true - 播放
			if(audio.paused) {
				audio.play(); //播放
			} else {
				audio.pause(); //暂停
			}
		}
	}
	aDish.click(function() {
		if(onOff) {
			$(".cd").find(".cdd").stop(true, true).removeClass("imgRotate");
		} else {
			$(".cd").find(".cdd").stop(true, true).addClass("imgRotate");
		}
		onOff = !onOff;
		audioPlay();
	})
});

function audioAutoPlay() {
	var audio = document.getElementById('bg-music');
	audio.play();
	document.addEventListener("WeixinJSBridgeReady", function() {
		audio.play();
	}, false);
}
// 音乐播放
function autoPlayMusic() {
	// 自动播放音乐效果，解决浏览器或者APP自动播放问题
	function musicInBrowserHandler() {
		musicPlay(true);
		document.body.removeEventListener('touchstart', musicInBrowserHandler);
	}
	document.body.addEventListener('touchstart', musicInBrowserHandler);
	// 自动播放音乐效果，解决微信自动播放问题
	function musicInWeixinHandler() {
		musicPlay(true);
		document.addEventListener("WeixinJSBridgeReady", function() {
			musicPlay(true);
		}, false);
		document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
	}
	document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}

function musicPlay(isPlay) {
	var media = document.querySelector('#bg-music');
	if(isPlay && media.paused) {
		media.play();
	}
	if(!isPlay && !media.paused) {
		media.pause();
	}
}
