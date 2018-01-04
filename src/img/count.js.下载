var _cur_url_ = document.location.href;
var _ajax_url_ = 'http://'+window.location.host+'/tools-add_count.html';
function add_count(ad_en_name,ad_name,position,brand,type){
    var rqt = new Request({
        method: "GET",
        url: _ajax_url_,
        data:{'ad_en_name':ad_en_name,'ad_name':ad_name,'uv':Cookie.get('S[N]'),'cur_url':_cur_url_,'type':type,'position':position,'brand':brand}
    });
    rqt.send();
    if(type=='1'){
        setCookie('S[direct_ad]',ad_en_name,10,"/");
    }
}

//检查元素是否出现在可视屏幕范围内
function checkScrollShow(obj){
    var oBoxH=obj.offsetTop;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var height=document.documentElement.clientHeight||document.body.clientHeight;
    return(oBoxH-height<scrollTop)?true:false;
}

window.addEvent('scroll',function(){
    start_load();
})


function getElementsByClassName_new(className, tagName) {
    tagName = tagName || "*";
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(className);
    } else {
        var tag = document.getElementsByTagName(tagName);
        var tagAll = [];
        for (var i = 0; i < tag.length; i++) {
            for (var j = 0, n = tag[i].className.split(' '); j < n.length; j++) {
                if (n[j] == className) {
                    tagAll.push(tag[i]);
                    break;
                }
            }
        }
        return tagAll;
    }
}

function start_load(){
    var aobj=getElementsByClassName_new('_advertise_');
    if(aobj){
        for(var i=0;i<aobj.length;i++){
            if(aobj[i].getAttribute('flag')==null && checkScrollShow(aobj[i])){
                aobj[i].setAttribute('flag','1');
                var parm=aobj[i].getAttribute('adv').split(',');
                add_count(parm[0],parm[1],parm[2],parm[3],parm[4]);
            }
        }
    }
}

window.addEvent('domready',function(){
    start_load();
})
