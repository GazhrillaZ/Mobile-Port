/**
 * Created by thinkpad on 2017/04/12.
 */

document.oncontextmenu=new Function("event.returnValue=false"); 
document.onselectstart=new Function("event.returnValue=false"); 

function setRootFontSize() {
	var width = document.documentElement.clientWidth;
	if(width > 750) {
		width = 550
	}
	var fontSize = (width / 375) * 50;
	document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';
}
setRootFontSize();
window.onresize = setRootFontSize;

function display(info){
    $('.prompt').html(info);
    $('.prompt').slideDown(300);
    var time = setTimeout(function(){
        $('.prompt').slideUp(300);
    },2000);
}
