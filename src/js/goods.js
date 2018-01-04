// $(function(){
//     var $spread = $('.n_select_open');
//     $('.goods').on('click','.n_select_open',function(){
//         $('.n_select').removeClass('.n_select');
//         $('.n_select').css({
//             height:'100%'
//         })
//         $('#n_select_open').removeClass('.n_select_open');
//         // $('.n_select_close').css(display:'block');
//     });
    
// })
document.addEventListener('DOMContentLoaded',function(){
    var ul = document.querySelector('.goodlists')
    var xhr = new XMLHttpRequest();
    var status = [200,304];
    xhr.onload = function(){
            if(status.includes(xhr.status)){
                var res = JSON.parse(xhr.responseText);
                ul.innerHTML=res.map(function(item){
                    return `
                            <dl data-guid="${item.id}">
                                <dt><img src="${item.imgurl}"/></dt>
                                <dd>
                                    <ul>
                                        <li>
                                            <i class="price">￥${item.price}</i>
                                            <i class="del_price">￥${item.discount}</i>
                                        </li>
                                        <li>${item.title}</li>
                                        <li>已售出<i style="color:#f60">97</i>件</li>
                                    </ul>
                                </dd>
                            </dl>    
                        `
                }).join('')
            }
        }
        xhr.open('get','http://localhost/1707/api/data/goods.json',true);
        xhr.send();    
})
