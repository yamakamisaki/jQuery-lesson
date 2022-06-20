$(function(){
  const title = $('#title').text();
  const list = $('.message').text();

  console.log(title);
  console.log(list);

  // class属性値の先頭が「sample」の要素だけを抽出する
   const test = $('li[class^="sample"]').text();
   console.log(test);

   $('.abc').on('click',()=>{
    console.log('kurikkuOK');
  });
    
  $('.abc').on({
    'click':()=>{
      $('.abc').css('background-color', 'red');
       // テキストを「click」 
       $('.abc').text('click');
    },
    'dblclick':()=>{
           // 背景を緑 
           $('.abc').css('background-color', 'green'); 
           // テキストを「dblclick」 
           $('.abc').text('dblclick');
    },
    'mouseenter':()=>{
         // 背景を青 
         $('.abc').css('background-color', 'blue'); 
         // テキストを「mouseenter」 
         $('.abc').text('mouseenter');
    },
    'mouseout':()=>{
             // 背景をグレー 
             $('.abc').css('background-color', 'gray'); 
             // テキストを「mouseout」 
             $('.abc').text('mouseout');
    }
  });

  $(document).on('click keydown',(e)=>{
    if(e.type === 'click'){
      $('#aaa').text('クリックされました！');
    }
    // キーが押された場合
    if(e.type === 'keydown'){
      $('#aaa').text('キーが押されました！');
    }
  });


});

