var people=[
	{name:"David Crockford", knownFor: "JavaScript"},
	{name:"Bjarne Stroustrup", knownFor: "C++"},
	{name:"Linus Thorvalds", knownFor: "Linux"}
	];

function printPeople()
{   
	var html="";
	for(var p in people){
		html+="<div class='person'>"+
				"<div class='name'>"+
					people[p]["name"]+
				"</div><div class='knownFor'>"+
					" is known for "+
					people[p]["knownFor"]+					
				"</div>"+
			"</div>";
	}
	document.getElementById("people").innerHTML=html;
}
