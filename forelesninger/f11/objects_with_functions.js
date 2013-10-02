var people=[
	{name:"David Crockford", knownFor: "JavaScript", fn: function(x){return "{input_as_json: '"+x+"'}"}},
	{name:"Bjarne Stroustrup", knownFor: "C++", fn: function(x){return x+"++"}},
	{name:"Linus Thorvalds", knownFor: "Linux", fn: function(x){return window.prompt("Use the OS!",x+"?")}}
	];

function printPeople()
{   
	var input=window.prompt("Feed the people with some input","C")
	var html="";
	for(var p in people){
		html+="<div class='person'>"+
				"<div class='name'>"+
					people[p]["name"]+
				"</div><div class='knownFor'>"+
					" is known for "+
					people[p]["knownFor"]+
				"</div><div class='function'>"+
					people[p]["fn"](input)+
				"</div>"+
			"</div>";

	}
	document.getElementById("people").innerHTML=html;
}
