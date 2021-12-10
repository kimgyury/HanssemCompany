// 한샘 common.JS

$(function(){
//	
	$(".navibar>ul>li>a").click(function(e){
		e.preventDefault();//기본이동막기
		var idx=$(this).parent().index();/*a요소만 모아서 순번*/
		console.log(idx);
		
		location.href="sub"+(idx+1)+".html";
	});
	$(".smenu>li>a").click(function(e){
		e.preventDefault();//기본이동막기
		var idx=$(this).parent().index();/*a요소만 모아서 순번*/
		var pidx=$(this).parent().parent().parent().index();
		console.log("부모순번:"+pidx+"/서브순번:"+idx);
		location.href="sub"+(pidx+1)+".html";
//		if(idx===2||idx===3){
//			location.href="sub1.html";
//		}
	});
	$(".logo").click(function(e){
		e.preventDefault();//기본이동막기
		location.href="index.html";
	});
//	
	$(".ham").click(function(e){
		e.preventDefault();
				$(".mwrap").css({
					left: "0%",
					transition: "left .6s ease-in-out"
				});
			});
	
	$(".close").click(function(e){
		e.preventDefault();
				$(".mwrap").css({
					left: "-100%",
					transition: "left .6s ease-in-out"
				});
			});
	
	
	$(".sub").hide().first().show();
			
			$(".title").click(function(){
				$(this).next().slideDown(400)
				.parent().siblings().find(".sub").slideUp(400);
			});////// click //////////
	
});// jQB//////////



///////////부드러운 스크롤/////////////////
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 90;
    else if (event.detail) delta = -event.detail / 2;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 15; //lower is faster
  var scrollSpeed = 15; //lower is faster

	if (end == null) {
  	end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}