
// モーダルがスライドイン

$('.loginbtn').click(function(){
  $('#modal2').slideDown(200);
});
$('.closebtn').click(function(){
  $('#modal2').slideUp(200);
});
$('.regibtn').click(function(){
  $('#modal2').slideDown(200);
});
$('.closebtn').click(function(){
  $('#modal2').slideUp(200);
});


// スライドショー
$('.slider').slick({
  autoplay:true, // 自動再生を設定
  autoplaySpeed:2000, // スライド切り替えの時間を設定
  dots:true, // インジケーターを表示
});


// ハンバーガーメニュー
(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);


// $('#start1').click(function(){
//   $('#modal00000').fadeIn(500);
// });
// $('#start2').click(function(){
//   $('#modal00000').fadeIn(500);
// });

// $('#close').click(function(){
//   $('#modal00000').fadeOut(500);
// });

// // トップをフェードイン

// $('#tp-bx-ttl-001').append(
//   '<style>#tp-bx-ttl-001{display:none;}'
//   );
//   $(window).on("load", function() {
//   $('#tp-bx-ttl-001').delay(600).fadeIn(1500);
//   $("#tp-bx-ttl-001").css({
//     "transform": "scaleY(1.3)"
//   });
// });
// $('#tp-bx-tx-001').append(
//   '<style>#tp-bx-tx-001{display:none;}'
//   );
//   $(window).on("load", function() {
//   $('#tp-bx-tx-001').delay(1500).fadeIn(1500);
//   $("#tp-bx-tx-001").css({
//     "transform": "scaleY(0.8)"
//   });
// });


// ページ途中をフェードイン  
  // $(window).on('load scroll', function (){

  //   var box = $('.fadeIn');
  //   var animated = 'animated';
    
  //   box.each(function(){
    
  //     var boxOffset = $(this).offset().top;
  //     var scrollPos = $(window).scrollTop();
  //     var wh = $(window).height();
  
  //     //画面内のどの位置で処理を実行するかで「100」の値を変更
  //     if(scrollPos > boxOffset - wh + 200 ){
  //       $(this).addClass(animated);
  //     }
  //   });
  
  // });

