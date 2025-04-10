$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(function () {
    $("").on("click", function () {
        $("").fadeToggle();
        $("").toggleClass("");
    });
});
$(".hamburger").click(function () {
    $(".header").toggleClass("open");
});

  $(function() {
    setTimeout(function(){
      $('.start p').fadeIn(1600);
    },500);
    setTimeout(function(){
      $('.start').fadeOut(500);
    },2500);
  });
});