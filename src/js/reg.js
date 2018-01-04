$(function(){
    var $username = $('#username');
    var $code = $('.code');
    var $license = $('#license').val();
    var $btn = $('#btn');
    var $zc = $('.zc');
    var $hint = $('.hint');
    var $huan = $('.huan');
    // 验证码
    function vCode(){
        var res = '';
        for(var i=0;i<4;i++){
            var code = parseInt(Math.random()*10);
            res+=code;
        }
        $code.html(res);
    } 
    vCode();
    $zc.on('click','.huan',function(){
        vCode();
        yanzheng();
    }).on('blur','.importCode',function(){
        yanzheng();
    }).on('blur','#username',function(){
        var $username = $('#username').val();
        var mobilePreg =/^1[34578]\d{9}$/i;
        if($username===''){
            $hint.css({display:'block'});
            $hint.html('用户名不能为空');
            return;
        }else if(!mobilePreg.test($username)){
            $hint.css({display:'block'});
            $hint.html('请输入正确的邮箱账号或手机！');
            return;
        }else{
            $hint.css({display:'none'});
            $hint.html();
        }
    }).on('blur','#psd1',function(){
        var password = /^\w{4,10}$/g; 
        if($('#psd1').val()===''){
            $hint.css({display:'block'})
            $hint.html('您输入的密码不能为空')
        }else if(!password.test($('#psd1').val())){
            $hint.css({display:'block'})
            $hint.html('您输入的密码不能小于4个字符！')
        }else{
            $hint.css({display:'none'});
            if($('#psd2').val()!=''){
                if($('#psd1').val()!=$('#psd2').val()){
                    $hint.css({display:'block'})
                    $hint.html('两次密码输入不一致，请重新输入！');
                    return;
                }else{
                    $hint.css({display:'none'})
                }
            }
        }
    }).on('blur','#psd2',function(){
        if($('#psd2').val()===''){
            $hint.css({display:'block'})
            $hint.html('请再次输入密码！');
        }else{
            if($('#psd1').val()!=$('#psd2').val()){
                $hint.css({display:'block'})
                $hint.html('两次密码输入不一致，请重新输入！');
                $('#psd2').val('');
                return;
            }else{
                $hint.css({display:'none'})
            }
        }
    })

    var yanzheng = function(){
        var $importCode = $('.importCode').val()
        if($importCode===''){
            $('.tanchuang').css({display:'block'});
            $hint.css({display:'none'});
        }else{
            $('.tanchuang').css({display:'none'});
        }
        if($importCode==$('.code').html()){
            $hint.css({display:'none'});
            $('.tanchuang').css({display:'none'});
        }else if($importCode!='' && $importCode!=$('.code').html()){
            $hint.css({display:'block'});
            $hint.html('验证码不正确，请重新输入');
        }
    }

    var $psd2 = $('#psd2').val();
    $btn.on('click',function(){
        var $username = $('#username').val();
        var status = [200,304];
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(status.includes(xhr.status)){
                var res = JSON.parse(xhr.responseText);
                res.map(function(item){
                    if($username==item.username){
                        $hint.css({display:'block'});
                        $hint.html('用户名已经被占用');    
                    }
                })
            }
        }
        xhr.open('get','http://localhost/1707/api/data/reg.json',true);
        xhr.send();
    })
})