
var TAU=2*Math.PI //tauday.com

var dotcount=200;

var dotbox="body";

var vector={ang:TAU, speed:4};

function makeDot(i){
    dot="#dot"+i; 
    //$(dotbox).append('<svg xmlns="http://www.w3.org/2000/svg" version="1.1">  <circle cx="200" cy="200" r="40" stroke="red" stroke-width="2" fill="red"/></svg>');
    $(dotbox).append("<div class='dot' id='dot"+i+"'></div>");
    $(dot).offset({left:$(window).width()/2,top:$(window).height()/2});
   
    console.log("Made "+dot);
    vec=Object.create(vector);
    vec.ang=Math.random()*TAU;
    vec.speed=Math.random()*vector.speed;
    $(dot).data("vector",vec);
}   

/*
    ON READY
*/



/*
    Set dot-properties!
*/

$(
    function(){

        for(var i=0; i<dotcount; i++){            
            makeDot(i);
        }
        $(" <span><strong> Dotcount:</strong> "+dotcount+"</span>").insertAfter("button");

    }
);


function movedot(dot){
   // console.log("Moving dot "+dot);
    var offs=$(dot).offset();
    var vector=$(dot).data("vector");
    
    offs.top+=vector.speed*Math.sin(vector.ang);
    //offs.left=100+xInt*Math.cos(ang);
    offs.left+=vector.speed*Math.cos(vector.ang);
    
    $(dot).offset(offs);
    //$(dot).data("vec",vector); //Only if speed changes.
    //angs[id]+=0.02;
}

function movedots(){
    for(var i=0; i<dotcount; i++){            
            movedot("#dot"+i);
        }
}

function start(){
    setInterval(movedots,42);
}
