
var left=100;
var right=100;

function moveRight(){
    var el=document.getElementById("ball");
    left+=10;
    el.style.left=left+"px";
}

function moveLeft(){
    var el=document.getElementById("ball");
    left-=10;
    el.style.left=left+"px";

    
}

