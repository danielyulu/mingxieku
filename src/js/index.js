$(function(){
    var $banner = $('.banner');
    var $ul = $banner.find('ul');
    var $copyLi = $ul.find('li').first('li').clone('li').appendTo($ul);
    var $imgLen = $ul.children().length;
    var $liWidth = $ul.find('li').width();
    var $imgWidth = $ul.first('img').width();
    // 创建轮播图按钮
    var $page = $('<ul/>').addClass('scroll_nav').appendTo($banner);
        for(var i=1;i<=$imgLen-1;i++){
            (function(i){
                var $span = $('<li/>');
                if(i===1){
                    $span.css({backgroundColor:'red'});
                }
                $span.appendTo($page);
            })(i)  
        }
    $page.css({
        left:($banner.width()/2)-$page.width()/2
    })
    $ul.css({ 
        width:$imgLen*$imgWidth
    });
    if($(document).width()>1600){
        $banner.css({width:1600})   
    }else{
        $banner.css({
            width:$(document).width()
        })
    }
    
    var index = 0;
    var timer = setInterval(function(){
        index++
        if(index>=$imgLen){
            index=1;
            $ul.css({left:0});
        }
        $ul.animate({left:-index*1600});

        for(var i=0;i<$imgLen-1;i++){
            $page.find('li').css({backgroundColor:''});
        }
        var $pageLi = $page.find('li');
        if(index==$imgLen-1){
            $pageLi.eq(0).css({backgroundColor:'red'});
        }else{
            $pageLi.eq(index).css({backgroundColor:'red'});
        }
    },3000);
    $('.lunbo').hover(function(){
        clearInterval(timer);
    },function(){
        console.log(6666)
    });
});