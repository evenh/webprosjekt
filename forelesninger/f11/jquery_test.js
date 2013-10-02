alert("Nå er det ingen ting på siden - fordi DOM'en har ikke blit laget.")

$(
    function(x,y){
	alert("Nå er DOM'n klar.");
    }
);

$(
    function(){
	alert("...og nå kan vi trygt endre alle div'ene.");
	$(".orange").css("background-color","blue");
	
	$(".green").click(
	    function(){
		$(".red").toggle(400);
	    }
	);

    }
    
);

