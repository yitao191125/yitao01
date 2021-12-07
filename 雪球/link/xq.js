window.onload=function(){
    var app =document.getElementById('app');
    var qrc =document.getElementById('qrc');
    var zc =document.getElementById('zc');
    var flag = true;
    // 下载APP图片
    app.onclick=function(){
       if (flag==true) {
           qrc.style.display="block";
           flag=false;
       } else {
        qrc.style.display="none"; 
        flag=true;
       }
        
     }
    // 注册登录
       zc.onclick=function(){
        alert("注册登录")
    }
}


