$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(function () {
    // ハンバーガーメニューの開閉
    $(".hamburger").click(function () {
      $(".header").toggleClass("open");
    });

    // ハンバーガーメニュー内のリンクをクリックしたらメニューを閉じる
    $(".header__hamburger__menu a").click(function () {
      $(".header").removeClass("open");
    });

    // 最初のフェードイン・アウト
    setTimeout(function () {
      $('.start p').fadeIn(1600);
    }, 500);
    setTimeout(function () {
      $('.start').fadeOut(500);
    }, 2500);
  });

  if (!sessionStorage.getItem('visited')) {
    $('.start p').fadeIn(1600);
    setTimeout(function () {
      $('.start').fadeOut(500);
    }, 2500);

    sessionStorage.setItem('visited', 'true');
  } else {
    $('.start').hide();
  }

});
