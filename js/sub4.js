// banner auto slide JS

var tmsts=0;

	///////////// Html 모두 로딩후 실행구역 ////////////
	window.addEventListener("load",function(){
		"use strict";
		
	});	/// load 구역 //////////////////////////////////////

		$(window).scroll(function(){
			var currBar=$(this).scrollTop();
		//	console.log(currBar);
					
			/// 1번 페이지 액션
			if(currBar>200 && currBar<300){
				$("#do2").stop().animate({opacity:1,left:"400px"},1400,"easeOutSine");
				$("#do3").stop().animate({opacity:1,left:"150px"},1400,"easeOutSine");
			}
			else if(currBar>100 && currBar<200){
				$("#do1").stop().animate({opacity:1,left:"70px"},400,"easeOutSine");
				$("#do4").stop().animate({opacity:1,right:"550px"},1400,"easeOutSine");
				$("#lBox").css({position:"absolute",width:"3000px",height:"400px",top:"100px",left:"-300px",transform:"rotate(-25deg)",transition:"all 2s ease-out",opacity:1});
			}
			else if(currBar>400 && currBar<800){
				$("#t1").css({top:"-50px",opacity:1,transition:"all 1s ease-in-out,box-shadow 1s ease-in-out 1s",boxShadow:"0 0 5px #ccc"});
			}
			else if(currBar>1000 && currBar<1200){
				
				$(".tex").css({top:"-70px",opacity:1,transition:"all 1s ease-in-out"});
			}
			else if(currBar>1300 && currBar<1500){
				
				$("#lBox2").css({position:"absolute",width:"3000px",height:"400px",top:"1500px",left:"-300px",transform:"rotate(-25deg)",transition:"all 2s ease-out",opacity:1,zIndex:-1});
			}
			else if(currBar>1600 && currBar<1800){
				
				$(".tex2").css({top:"0px",opacity:1,transition:"all 1s ease-in-out"});
			}
			else if(currBar>2200 && currBar<2400){
				
				$(".tex3").css({top:"0px",opacity:1,transition:"all 1s ease-in-out"});
			}
		
		});////////////////////////////// scroll /////////////////////////////////
		
		
	$(function(){//// jQB ////
		
		$("a").click(function(e){
			e.preventDefault();//이동막기
		});////////// click ///////////////	
		
		
		$("#banner").parallax("50%",0.5);
		$("#banner>h1").parallax("50%",0.2);
		// 스크롤 액션 초기 셋팅함수 호출
		initSet();
		
		
		});// jQB //
		
		function initSet(){
			$("#do1").css({opacity:0,left:"0px"});
			$("#do2").css({opacity:0,left:"100px"});
			$("#do3").css({opacity:0,left:"0px"});
			$("#do4").css({opacity:0,right:"0px"});
			$("#lBox").css({position:"absolute",width:"3000px",height:"400px",top:"100px",left:"-1700px",transform:"rotate(-90deg)",opacity:0});
			$("#lBox2").css({position:"absolute",width:"3000px",height:"400px",top:"1500px",left:"-1700px",transform:"rotate(-90deg)",opacity:0});
			$("#t1").css({top:"0px",opacity:0});
			$(".tex").css({top:"0px",opacity:0});
			$(".tex2").css({top:"50px",opacity:0});
			$(".tex3").css({top:"50px",opacity:0});
		}
		
		

		
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
		
		$(".second li img").hover(function(){//over
			$(this).stop().fadeTo(400,0.5);
		},function(){//out
			$(this).stop().fadeTo(400,1);
		});
		
		$(".fLink").hover(function(){
			$("div",this).show("drop",700).hover(function(){
				$(this).animate({backgroundColor:"#000"},500).siblings().stop().fadeTo(400,0.5);
			},function(){
				$(this).animate({backgroundColor:"#fff"},500).siblings().stop().fadeTo(400,1);
			});
		},function(){
			$(".sBox1").hide("drop",700);
		});
		
		
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
	
	
	
	


