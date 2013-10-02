
var TAU=2*Math.PI

var dotcount=500;

var dotbox="body";

var vector={ang:TAU, speed:4};

var vectors=[];

function makevectors(){
    //$(dotbox).append('<svg xmlns="http://www.w3.org/2000/svg" version="1.1">  <circle cx="200" cy="200" r="40" stroke="red" stroke-width="2" fill="red"/></svg>');
   // $(dotbox).append("<div class='dot' id='dot"+i+"'></div>");
   for(var i=0;i<dotcount;i++){
        vec=Object.create(vector);
        vec.ang=Math.random()*TAU;
        vec.speed=Math.random()*vec.speed;
        vectors[i]=vec;
    }
    console.log("Made "+vectors.length+" vectors");
}   

/*
    ON READY
*/



/*
    Create all the SVG-dots in one go
*/

$(
    function(){
        console.log("Ready");


        svg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1">';
        for(var i=0; i<dotcount; i++){
            //console.log("Adding "+i);
            svg+='<circle cx="'+($(window).width()/2)+'" cy="'+(($(window).height()/2)-40)+'" r="5" fill="red"/>';
           // makeDot(i);           
        }
        svg+="</svg>";
       //console.log("Writing svg "+svg);
        $("#dotbox").html(svg);


        makevectors();

        $(" <span><strong> Dotcount:</strong> "+dotcount+"</span>").insertAfter("button");
      
    }

    
);

function movedot(index, dot){
        
    var cx=dot.cx.animVal.value;
    var cy=dot.cy.animVal.value;

    //console.log("Cx: "+cx);
    var vector=vectors[index];
    
    cy+=vector.speed*Math.sin(vector.ang);
    //offs.left=100+xInt*Math.cos(ang);
    cx+=vector.speed*Math.cos(vector.ang);
    
    dot.setAttribute("cx",cx);
    dot.setAttribute("cy",cy);
    //$(dot).data("vec",vector); //Only if speed changes.
    //angs[id]+=0.02;*/
}

function movedots(){
   // console.log("Moving dots");
    dots=$("circle");
    for(dot in dots){      
            movedot(dot,dots[dot]);
    }
}

function start(){
    setInterval(movedots,42);   
    //movedots();
}
