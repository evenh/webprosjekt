
var TAU=2*Math.PI

var t=0;
var dotcount=1000;
var dotRadius=3;
var dotbox="body";

var vector={ang:TAU, speed:30};//Without slowdown, speed 3 is ok.

var vectors=[];
var dots=[];
var colors=["orange","gold","red","blue","green","pink"];

var startX=500;
var startY=250;

var minSpeed=0.2;

/*
    Make the dot-coordinates and the vectors
*/
function makedots(){
 
   for(var i=0;i<dotcount;i++){
        vec=Object.create(vector);
        vec.ang=Math.random()*TAU;
        vec.speed=Math.random()*vec.speed;
        vectors[i]=vec;
        dots[i]={x:startX,y:startY};
    }
    console.log("Made "+vectors.length+" vectors");
}   

/*
    Draw dot nr. i, to canvas context ctx
*/
function drawdot(i,ctx){
  //  console.log("Drawing dot "+i+","+dots[i].x+","+dots[i].y+","+dotRadius);
     ctx.beginPath();
     ctx.fillStyle=colors[i%colors.length];
     ctx.arc(dots[i].x,dots[i].y,dotRadius,0,TAU);
     ctx.fill();
}

/*
    Move dot i, one step ahead, in it's own direction
*/
function movedot(index){
              
    var vector=vectors[index];
    
    dots[index].x+=vector.speed*Math.sin(vector.ang);    
    dots[index].y+=vector.speed*Math.cos(vector.ang);

    //Speed slowdown
    //if(vectors[index].speed>=minSpeed)
        vectors[index].speed-=vectors[index].speed/20;

}

/*
    Move all dots, one step ahead
*/
function movedots(){   
    t++;
    console.log("Moving dots");    

    //Get the canvas
    var c=$("canvas")[0];

    //Clear canvas to cleanup trail, unless user wants it.
    if(!$("#leaveTrail").is(":checked"))
        c.width = c.width;


    var ctx=c.getContext("2d");
    for(dot in dots){      
            movedot(dot,dots[dot]);
            drawdot(dot,ctx);
    }
    
}

/*
    ON READY
*/



/*
    Set dot-properties!
*/


$(
    function(){
        
        //Get the canvas
        var c=$("canvas")[0];

        //Clear canvas, and resize to window size
        c.width = $(window).width();
        c.height = $(window).height();
        startY=c.height/2;
        startX=c.width/2;

        makedots();

        console.log("Ready");

        var c=$("canvas")[0];
        var ctx=c.getContext("2d");
    
        //drawdot(0,ctx);  
        $(" <span><strong> Dotcount:</strong> "+dotcount+"</span>").insertAfter("button");
        $("#l")
    }

);

/*
    Start the animation
*/
function start(){
    setInterval(movedots,42);   
}
