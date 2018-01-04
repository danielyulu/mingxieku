document.addEventListener('DOMContentLoaded',function(){
    document.onmouseover = function(e){
        if(e.target.tagName.toLowerCase() =='a'){
            e.target.style.textDecoration = 'underline';
            e.target.style.color = 'red';
        }
        if(e.target.className.toLowerCase()=='lnk'){
            e.target.style.color = 'red'; 
        }
        if(e.target.className.toLowerCase()=='xieyi'){
            e.target.style.color = 'rgb(51, 102, 221)'; 

        }
    }
    document.onmouseout = function(e){
        if(e.target.tagName.toLowerCase() =='a'){
            e.target.style.textDecoration = '';
            e.target.style.color = '';
        }
        if(e.target.className.toLowerCase()=='lnk'){
            e.target.style.color = '#f60';
            e.target.style.textDecoration = 'underline';
        }
        if(e.target.className.toLowerCase()=='xieyi'){
            e.target.style.color = 'rgb(51, 102, 221)'; 
            e.target.style.textDecoration = 'underline';
        }
    }
})