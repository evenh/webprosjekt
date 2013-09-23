var name1="Linus";
var name2="Knausgård";

function getLastName(){
    name2="Carlsen";
    name2=window.prompt("Linus...",name2);
}

function welcomeUser(){
    getLastName();
    if(name2!="Thorvalds"){
       alert("Feil!"); 
       welcomeUser();
   }
   
   var name=name1+" "+name2;
   for(var i=0; i<500; i++)
       document.writeln(name+" Rocks");
}

