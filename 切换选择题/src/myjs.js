
$(function() {
    
    $('.wrong').click(function() {
     alert('答案错误！')
    }),
    
    $('.correct').click(function() {
      $(this).css('color','green').siblings().css('color','')
    });

    var index = 0;
    var number= $('.question .q').length;
    $('.content-nav').text(index+1+'/'+number)//1/6
    $(".q").hide();
    $(".q").eq(index).show();

    //点击下一题
    $('.next').click(function() {
      index++;
      $('.content-nav').text(index+1+'/'+number)
      $('.prev').css('display','block')
      $(".q").hide();
      $(".q").eq(index).show();
    }),
    $('.prev').click(function() {
      index--;
      $('.content-nav').text(index+1+'/'+number)
      $(".q").hide();
      $(".q").eq(index).show();
    })

  })

