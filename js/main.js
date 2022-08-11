var myFullpage = new fullpage('#fullpage', {
    menu: '#menu',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5' , 'section6'],
    autoScrolling: true,  //스크롤 바를 스크롤 하면 한 페이지씩 넘어감(기본설정)
    scrollBar:true
});


var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".mySwiper_1", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2_1", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".mySwiper_2", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2_2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".mySwiper_3", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2_3", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

function winOpen(){
  window.open('https://yeju95.github.io/mobile_site/','popup','width=437, height=915,resizable=no ')
}


var pos = [];//각 section이 top에서 부터 얼마나 떨어져 있냐를 알아내기 위한 변수 설정(배열)
for(var i=1 ; i<7; i++){
    pos.push(($('#section'+i).offset().top)-160 );
}
console.log(pos);


//인디게이터를 누르면 각 페이지(section)으로 이동한다.
$('.indicator li a').on("click",function(e){
  e.preventDefault();   // a의 기본기능을 못하게 한다.
  var target=this.hash //#(해쉬) 값을 찾아서 변수에 넣는다

  //var sectionH = 선택자.offset().top  각 section의 위로부터의 거리
  var sectionH = ($(target).offset().top)-20;
  //각section의 위로부터의 거리에서 고정 헤더길이(160px)만큼 빼줌

  $('html,body').animate({scrollTop:sectionH},500)

});

//모바일-인디게이터를 누르면 각 페이지(section)으로 이동한다
$('.m_indicator li a').on("click",function(e){
  e.preventDefault();       //a의 기본 기능을 못하게 한다.
  var target = this.hash    //  #(해쉬) 값을 찾아서 변수에 넣는다    

  var sectionH =($(target).offset().top) - 20; 
  //각section의 위로부터의 거리에서 고정 헤더길이(85px)만큼 빼줌

  $('html,body').animate({scrollTop:sectionH},500);   
  
  $('m_indicator li').removeClass('on')
  $(this).parent('li').addClass('on');
  // 클릭한 인디게이터 부모 li에 on클라스 추가
});

var currenrP;  //현재 어떤 section부분에 있는지 알아오는 변수선언

$(window).scroll(function(){
  var scrollH = $(window).scrollTop();    //스크롤 된 거리  
  console.log(scrollH);
  

      //스크롤 시 인디케이터색상변환
  if(scrollH < pos[1]){
      $('.indicator li').removeClass('on');
      $('.indicator li').eq(0).addClass('on');
      currentP = 0;
  } else if(scrollH >= pos[1] && scrollH < pos[2] ){
      $('.indicator li').removeClass('on');
      $('.indicator li').eq(1).addClass('on');
      currenrP = 1 ;
  }else if(scrollH >= pos[2] && scrollH < pos[3] ){
      $('.indicator li').removeClass('on');
      $('.indicator li').eq(2).addClass('on');
      currentP = 2;
  }else if(scrollH >= pos[3] && scrollH < pos[4] ){
        $('.indicator li').removeClass('on');
        $('.indicator li').eq(3).addClass('on');
        currentP = 3;
  } else if(scrollH >= pos[4] && scrollH < pos[5] ){
    $('.indicator li').removeClass('on');
    $('.indicator li').eq(4).addClass('on');
    currentP = 4;
  }else{
      $('.indicator li').removeClass('on');
      $('.indicator li').eq(5).addClass('on');
      currentP = 5;
  }
});

//하나 위 section으로 스크롤 되게
$('.indicator_prev').on('click',function(){
  currenrP = currenrP - 1;
  $('html,body').animate({scrollTop:pos[currenrP]+2},500,'swing'); 
});

//하나 아래 section으로 스크롤 되게
$('.indicator_next').on('click',function(){
  currenrP = currenrP + 1;
  $('html,body').animate({scrollTop:pos[currenrP]+2},500,'swing'); 
});


