$(document).ready(function() {
	var c1 = $("#c1").slotMachine({
		active: 0,
		delay: 500
	});
	var c2 = $("#c2").slotMachine({
		active: 1,
		delay: 500
	});
	var c3 = $("#c3").slotMachine({
		active: 2,
		delay: 500
	});
	
	function onComplete(active) {
		//				switch(this.element[0].id) {
		//					case 'c1':
		//						$("#r1").text(active.index);
		//						break;
		//					case 'c2':
		//						$("#r2").text(active.index);
		//						break;
		//					case 'c3':
		//						$("#r3").text(active.index);
		//						break;
		//				}
	}
	var swt = false;
	$("#btn").click(function() {
		var b1 = c1.running;
		var b2 = c1.running;
		var b3 = c1.running;
		if(b1 || b2 || b3 || swt) {
			return
		};
		
		swt = !swt;
		//		c1.shuffle(5, onComplete);
		//		//		c2.shuffle(3, onComplete);
		//		//		c3.shuffle(3, onComplete);
		//		setTimeout(function() {
		//			c2.shuffle(5, onComplete);
		//		}, 500);
		//		setTimeout(function() {
		//			c3.shuffle(5, onComplete);
		//		}, 1000);
		Mresult();
		c1.setRandomize(function() {
					return arr[0];
				});
				c2.setRandomize(function() {
					return arr[1];
				});
				c3.setRandomize(function() {
					return arr[2];
		});
		c1.shuffle();
		c2.shuffle();
		c3.shuffle();
		var t = 0; //计时
		var timeN = setInterval(function() {
			t++;
//			console.log(t);
			if(t == 4) {
				
				c1.stop();
				setTimeout(function(){
					c2.stop();
				},500);
				
				setTimeout(function(){
					c3.stop();
				},1000);
				
				setTimeout(function(){
					swt = !swt;
				},2000);
				
				clearInterval(timeN);
			}
		}, 500);

	});

	function Mresult() {
		var _num = 99 // 最大值
		var _index = parseInt(Math.random() * (_num + 1));
		console.log(_index);
		if (_index == 1) {
			arr=[0,0,0];//200块
		}
		else if ( _index > 10 && _index < 16) {
			arr=[1,1,1];//100块
		}
		else if ( _index > 20 && _index < 27) {
			arr=[2,2,2];//200彩虹币
		}
		else if ( _index > 30 && _index <= 40) {
			arr=[3,3,3];//100彩虹币
		}
		else if ( _index > 40 && _index < 49) {
			arr=[4,4,4];//50块
		}
		else if ( _index > 50 && _index <= 70) {
			arr=[5,5,5];//+3%加息券
		}
		else if ( _index > 70 && _index <= 80) {
			arr=[];//20块
			_xx = parseInt(Math.random() * 2);
			for (var i = 0; i < 2 ; i++) {
				getx(arr);
			}
			arr[2] = arr[_xx];
		}
		else{
			defnum();
		}
		console.log(arr);
	}
	
	function getx(arr) {
		for(var i = 0; i > -1; i++) {
			var flag = true;
			var num = Math.floor(Math.random() * 6);
			for(var i in arr) {
				if(arr[i] == num) {
					flag = false;
					break;
				}
			}
			if(flag == true) {
//				console.log(num);
				arr.push(num);
				return;
			}
		}

	}

	function defnum() {
		arr = [];
		for(var i = 0; i < 3; i++) {
			getx(arr);
		}
//		console.log(arr);
	}
})