$(function(){

  //hideメソッド使用
  $('#btn_2').on('click',()=>{
    $('#push').hide();
  });

  // CSSメソッド使用
  $('#btn_3').on('click',()=>{
    $('#push2').css({
      fontSize: '30px',
      color: 'red'
    });
  });

  $('#btn_4').on('click',()=>{
    $('#push2').css({
      fontSize: '9px',
      color: 'blue'
    });
  });

  $('#btn_5').on('click',()=>{
    $('#push2').css({
      fontSize: '17px',
      color: 'orange'
    });
  });

  // 表示方法を変えるメソッド使用
  $('#sky').fadeIn('slow');
  $('#sky2').slideDown('slow');

  $('#sky3').fadeOut('slow');
  $('#sky4').slideUp('slow');

  // どの子要素を取得するか
  $('#container_btn').on('click',()=>{
    $('#container').find('a').fadeOut();
  });

  $('#container_btn2').on('click',()=>{
    $('#container').children('a').fadeOut();
  });

});