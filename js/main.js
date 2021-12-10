// banner auto slide JS

var tmsts=0
	///////////// Html 모두 로딩후 실행구역 ////////////
	window.addEventListener("load",function(){
		"uses strict";
		// 슬라이드 자동실행 함수호출
		autoSlide();
		
		
		
	});	/// load 구역 //////////////////////////////////////
	////////////////////////////////////////////////////////
	

		
///////////////// 스크롤 TOP 버튼 /////////////////////////

	$(window).scroll(function(){//scroll
		var tbpos=$(window).height()*0.9;
		var currBar=$(this).scrollTop();
		
		$("#tbtn").show().stop().animate({
				top: (currBar+tbpos)+"px"
			},300,"easeOutCubic");
		
		if(currBar<300){
			$("#tbtn").hide();
		}
		
		else if(currBar>350 && tmsts===0){
				tmsts=1;
			$(".top").css({position:"fixed",top:"-130px"}).stop().animate({top:"0"},300).addClass("newTM");
			$(".ham,.close").css({top: "25px"});
		}
		else if(currBar<=350 && tmsts===1){
			tmsts=0;//해제
			$(".top").stop().animate({top:"-80px"},300,function(){
				$(this).css({position:"absolute",top:"0"}).removeClass("newTM");//class지우기
				$(".ham,.close").css({top: "45px"});
			});
		}/// else if문
		/*
		else if(currBar>300){
			$(".top").stop().animate({top:"0px"},300,function(){
					$(this).css({position:"absolute",top:"0"}).removeClass("newTM");
			});
		}
		*/	 
	});//scroll/////////////////////////////////
	
	$(function(){/// jQB /////////////////////////////
		
		$("a").click(function(e){
			e.preventDefault();//이동막기
		});////////// click ///////////////
		
		
		/* Top클릭시 위로 이동 */
		$("#tbtn").click(function(){
			$("html,body").animate({
				scrollTop:"0px"
			},800,"easeOutQuad");
		});
		
		
//		 fBox마우스 오버시 배경 반투명되기
		$(".fBox1").hover(function(){//over
			$(".first li:first-child>div").stop().fadeTo(400,0.5)
					.stop().animate({
						width: "103%", left:"-1%", opacity:0.5
					},600);
		},function(){//out
			$(".first li:first-child>div").stop().fadeTo(400,1)
					.stop().animate({
						width: "100%", left:"0", opacity:1
					},600);
		});
		
		$(".fBox2").hover(function(){//over
			$(".first li:last-child>div").stop().fadeTo(400,0.5)
					.stop().animate({
						width: "103%", left:"-1%", opacity:0.5
					},600);
		},function(){//out
			$(".first li:last-child>div").stop().fadeTo(400,1)
				.stop().animate({
						width: "100%", left:"0", opacity:1
					},600);
		});
		
//		$(".second li img").hover(function(){//over
//			$(this).stop().fadeTo(400,0.5);
//		},function(){//out
//			$(this).stop().fadeTo(400,1);
//		});
		
		$(".fLink").hover(function(){
			$(".sBox1",this).stop().animate({left:"50%",opacity:1},700);
			$("img",this).stop().fadeTo(400,0.5);
		},function(){
			$(".sBox1",this).stop().animate({left:"40%",opacity:0},700);			
			$("img",this).stop().fadeTo(400,1);
		});
		
		$(".n_title>div").hover(function(){
			$("span",this).eq(0).stop().animate({rotate:"45deg",top:"6px",width:"30%",left:"45px"},200);
			$("span",this).eq(1).stop().animate({width:"60%",left:"30px"},200);
			$("span",this).eq(2).stop().animate({rotate:"-45deg",top:"14px",width:"30%",left:"45px"},200);
			$("span",this).eq(3).stop().css({width:"100%",top:"10px"});
			$(this).find("p").stop().animate({left:"42px"},300);
			$(this).parent().addClass("add");
//			$(this).parent().css({backgroundImage:"url(images/notice01_2.jpg)"});
		},function(){
			$("span",this).eq(0).stop().animate({rotate:"0deg", top:"0px", width:"0%"},200);
			$("span",this).eq(1).stop().animate({left:"0px", width:"0%"},200);
			$("span",this).eq(2).stop().animate({rotate:"0deg", top:"20px",width:"0%"},200);
			$("span",this).eq(3).stop().css({width:"0%",top:"10px"});
			$(this).find("p").stop().animate({left:"65px"},300);
			$(this).parent().removeClass("add");
//			$(this).parent().css({backgroundImage:"url(images/notice01_1.jpg)"});
		});
	
		$(".txt_1").eq(0).hover(function(){
			$(this).stop().animate({backgroundColor:"#2b2b2b"},500);
			$("p",this).eq(0).text("인스타그램").css({color:"#fff",top:"46%",transition:"all .4s ease-out"});
			$("p",this).eq(1).css({color:"#676767",transition:"all 1s"});
		},function(){
			$(this).stop().animate({backgroundColor:"#3c3c3c"},500);
			$("p",this).eq(0).text("instargram").css({color:"#e8e8e8",top:"47%",transition:"all .4s ease-out"});
			$("p",this).eq(1).css({color:"#fff",transition:"all 1s"});
		});
		
		$(".txt_1").eq(1).hover(function(){
			$(this).stop().animate({backgroundColor:"#2b2b2b"},500);
			$("p",this).eq(0).text("페이스북").css({color:"#fff",top:"46%",transition:"all .4s ease-out"});
			$("p",this).eq(1).css({color:"#676767",transition:"all 1s"});
		},function(){
			$(this).stop().animate({backgroundColor:"#3c3c3c"},500);
			$("p",this).eq(0).text("facebook").css({color:"#e8e8e8",top:"47%",transition:"all .4s ease-out"});
			$("p",this).eq(1).css({color:"#fff",transition:"all 1s"});
		});
		
		$(".txt_1").eq(2).hover(function(){
			$(this).stop().animate({backgroundColor:"#5c4241"},500);
			$("p",this).eq(0).text("네이버블로그").css({color:"#fff",top:"46%",transition:"all .4s ease-out"});
			$("p",this).eq(1).css({color:"#9a706d",transition:"all 1s"});
		},function(){
			$(this).stop().animate({backgroundColor:"#4b3635"},500);
			$("p",this).eq(0).text("blog").css({color:"#e8e8e8",top:"47%",transition:"all .4s ease-out"});
			$("p",this).eq(1).css({color:"#fff",transition:"all 1s"});
		});
		
		$(".txt_1").eq(3).hover(function(){
			$(this).stop().animate({backgroundColor:"#5e4f3b"},500);
			$("p",this).eq(0).text("유튜브").css({color:"#fff",top:"46%",transition:"all .4s ease-out"});
			$("p",this).eq(1).css({color:"#8a7356",transition:"all 1s"});
		},function(){
			$(this).stop().animate({backgroundColor:"#514433"},500);
			$("p",this).eq(0).text("youtube").css({color:"#e8e8e8",top:"47%",transition:"all .4s ease-out"});
			$("p",this).eq(1).css({color:"#fff",transition:"all 1s"});
		});
		
//		$(".sBox1").hover(function(){
			//alert("나야나");
//			$(this).prev().css({backgroundImage:"url(../images/family2.jpg)"});
//		},function(){
//			$(this).prev().css({position:"relative",backgroundColor:"#000"});
//		});
		
		
	});/////// jQB //////////////////////////////////
	
	
	/*////////////////////////////////////////////////
		함수명: goSlide
		기능: 슬라이드 이동버튼 클릭시 오른쪽 혹은 왼쪽으로 슬라이드 이동하기
	*//////////////////////////////////////////////////////////
	var snum=0;//슬라이드 번호 전역변수
	function goSlide(dir,sn){//dir 이동방향(1-오른쪽,0-왼쪽,2-직접이동), sn - 이동할 슬라이드 번호 
		//alert("dir="+dir+"/sn="+sn);//호출확인!
		
		"use strict";
		
		// 1. 변경할 대상선정
		var tg = document.getElementById("slide");
		// 2. 변경 내용 적용
		
		/// 오른쪽 버튼, 왼쪽버튼 구분영역////
		if(dir===1){//오른쪽
			//슬라이드 번호 1씩 증가하기
			snum++;
			//한계수설정(처음으로)
			if(snum===5){snum=0;}		
			
		}//// if문 ////
		else if(dir===0){//왼쪽
			//슬라이드 번호 1씩 감소하기
			snum--;
			//한계수설정(맨끝으로)
			if(snum===-1){snum=4;}
		}/// else if문 ////
		else if(dir===2){// 직접이동하기!!!
			snum=sn;//슬라이드 순번 전역변수에 넣기	
		}///// else if문 ///////
		
		
		
//		console.log("슬라이드번호:"+snum);
		tg.style.left = (-100*snum)+"%";/*부모의 width크기 100%*/
		tg.style.transition="left .8s ease-in-out";
		
		////////////////////////////////////////////////////
		//// 블릿버튼 현재 해당 슬라이드 표시하기 ///
		// 1. 대상선정(블릿의 li)
		var indic = document.getElementById("indic")
		.getElementsByTagName("li");
		
		// 2. 변경내용 적용(회색이미지 보이기 class적용)
		
		// 블릿 li에 class 지우기 초기화!	
		//indic.length - li집합의 개수(길이)
//		for(var i=0; i<indic.length; i++){
		for(var i in indic){
			indic.item(i)
			.setAttribute("class","");
		}//////for문//////////
		
		/*
		또 다른 for문 : for/in 문
		
		for(시작값 in 집합변수){
			... 구현코드 .....
		}
		
		-집합변수 : 배열, 객체, DOM객체 등. 여러개가 한꺼번에 들어가 있는 종류의 변수
		- 시작값이 0부터 집합변수의 개수만큼 자동으로 돌아준다!!
		*/
		
		
		//// 현재 해당 li에 class="showit" 넣기
		indic.item(snum).setAttribute("class","showit");
		// setAttribute(속성명, 값)
		// JS 내장함수로 속성과 값을 셋팅하는 기능
		
		
		
		
	}///////// goSlide함수 //////////////////////////////////
	//////////////////////////////////////////////////////////
	
	
	/*/////////////////////////////////////////////////////////
		함수명: autoSlide
		기능: 자동으로 슬라이드를 일정간격으로 하다가 버튼을 클릭할 경우 멈춤. 일정시간동안 클릭하지 않으면 다시 호출됨.	
	*//////////////////////////////////////////////////////////
	var autocall="";//인터벌함수용 전역변수
	function autoSlide(){
		//alert("자동실행!");//호출확인
		
		//3초간격으로 함수호출
		autocall=setInterval("goSlide(1,0)",5000);
		
		
		
	}/////// autoSlide 함수 ///////////////////////////////
	/////////////////////////////////////////////////////////
	
	/*/////////////////////////////////////////////////////
		함수명: clearAuto
		기능: 인터벌 함수 셋팅을 지운다.
	*//////////////////////////////////////////////////////
	var clearT="";//타임아웃함수용 전역변수
	function clearAuto(){
		//alert("지워!");
		//인터벌 지우기
		clearInterval(autocall);//인터발지우기
		clearTimeout(clearT);//타임아웃지우기
		//타임아웃을 한개만 남겨야함!!(중복실행방지!)
		
		// 시간을 셋팅하여 일정시간 후 한번만 실행하는 setInterval의 친구!
		// setTimeout(함수명, 시간);
		
		//8초 뒤에 인터발함수 호출!
		clearT=setTimeout("autoSlide()",8000);
		
		
	}////// clearAuto함수 ////////////////////////////////
	////////////////////////////////////////////////////////
	
	
	
	


