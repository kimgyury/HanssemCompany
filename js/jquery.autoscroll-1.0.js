// jquery.autoscroll-1.0.js

var pno=0;
	var totpno=5;//전체 페이지개수
	var prot=0;// 막기상태값(0-허용,1-막기)

$(function(){//// jQB ////
	
			$(document).on("mousewheel DOMMouseScroll", function(e){
				//console.log("스크롤중!");
				// 1. 스크롤 기본이동 막기(파라미터 e를 써야함)
				e.preventDefault();
				
				/////// 스크롤 이동중 잠금장치!! ///////
				if(prot===1){return false;}// 돌아가
				prot=1;//처음 들어온 신호가 잠금.♥
				////////////////////////////////////////////
				
				
				
				
				// 2. ie 구버전 구분하기
				var evt = window.event || e;
				// 변수 = 변수1 || 변수2
				// 둘중에 true인 변수가 할당된다.
				// window.event - ie8 이전버전용임.
				
				// 3. 마우스휠 이벤트에서 가장 중요한 개념.
				// -> wheelDelta 란? (ie, chrome용), opera는 detail을 사용.
				/*
				- 마우스 이벤트에 따라 발생하는 이벤트 횟수 및 방향과 이동거리 등을 리턴해주는 속성
				- 만약에 wheelDelta를 click이벤트에 적용하면 클릭횟수를 리턴함.
				- 마우스 휠 이벤트일 경우 스크롤 방향과 이동거리를 리턴해준다.(+는 윗방향, -는 아랫방향)*/
				
				var delta=evt.detail?evt.detail:evt.wheelDelta;
				// 조건연산자를 사용하여 detail이 true면(opera면) 그대로 쓰고, false이면(opera가 아니면) wheelDelta를 변수에 할당하라
				console.log(delta);//방향
				
				//////// 파이어폭스를 위한 별도처리 ////////
				/// 1. 파이어폭스는 스크롤 처리시 방향이 반대임
				/// 2. 파이어폭스는 detail처리시 originalEvent.detail로 사용함.
				if(/Firefox/i.test(navigator.userAgent)){
					delta=-evt.originalEvent.detail;
				}////////////////////////////////////////////////////////
				/// 정규표현식.test(값) -> 해당값이 정규표현식에 맞으면 true를 return, 틀리면 false
				/// navigator.userAgent -> 현재 브라우저 이름
				
				
				////////////////////////////////////////////////////////
				if(delta>0){//윗방향(양수)
					pno--;// 페이지번호 감소
					if(pno===-1){pno=0;}// 첫페이지 고정(더이상 위로 올라갈수 없게)
				}// if문
				else{//아랫방향(음수)
					pno++;// 페이지번호 증가
					if(pno===totpno){pno=totpno-1;}// 끝페이지 고정(더이상 밑으로 내려갈수 없게)
				}// else문
				//////////////////////////////////////////////////////
				console.log(pno);//페이지번호
				
				////// 4. 해당순번 페이지 높이값 구하기 //////
				var pagepos=$(".page").eq(pno).offset().top;
				
				/// 5. 페이지 이동 애니메이션 설정하기 ////
				
				$("html,body").animate({
					scrollTop: pagepos+"px"
				},800,"easeInOutCirc",function(){
					prot=0;//이동애니 후 잠금풀기♥
				});/// ani ///
				
				
				chgMenu();
				////페이지 액션 함수
				pageAction();
				
				// ★ 밑에 function chgMenu()안하면 이거로해도됨
				////////////////////////////////////////////////////////////
				/// 6. GNB메뉴, 블릿메뉴 class변경하기 함수호출
				
				/// 6. 페이지 이동시 메뉴 class 변경하기 ///
				//$("#gnb li").eq(pno).addClass("selM").siblings().removeClass("selM");
				
				/// 7. 페이지 이동시 블릿 class 넣기
				//$("#bnavi>li").eq(pno).addClass("selB").siblings().removeClass("selB");
				//////////////////////////////////////////////////////////
				// ★ 밑에 function chgMenu()안하면 이거로해도됨
				
			});//////////// 마우스휠 이벤트 함수 /////////////////
			/////////////////////////////////////////////////////////
			
			
	
}///jQB

/*/////////////////////////////////////////
	함수명 : pageAction
	기능 : 페이지별 액션을 셋팅한다.
*//////////////////////////////////////////
function pageAction(){
	//// 첫페이지 일때 상단 메뉴 디자인 변경
	if(pno===0){
		// 1. 로고크기 변경
		$(".logo").animate({width: "15%",margin:"3% 0 1% 3%"},300);
		// 2. 가상요소 배경 투명도 변경
		$(".top").removeClass("topa");
		// 3. 메뉴 위치 변경
//		$("#gnb").animate({bottom:"15%"},300
//		$("#ham").animate({top: $("#gnb").offset().top+"px"},300);	
	}////////////// if문 /////////////
	///// 그밖의 페이지일때 상단 메뉴 디자인 변경
	else{
		// 1. 로고크기 변경
		$(".logo").animate({width: "10%",margin:"1% 0 1% 1%"},300);
		// 2. 가상요소 배경 투명도 변경
		$(".top").addClass("topa");
		// 3. 메뉴 위치 변경
//		$("#gnb").animate({bottom:"4%"},300);
//		$("#ham").animate({top: $("#gnb").offset().top+"px"},300);
	}///////////// else문 ////////////
}///pageAction 함수














