var name1="Linus";
var name2="Knausgård";

function getLastName(){
    name2="Carlsen";
    name2=window.prompt("Linus...",name2);
}

function welcomeUser(){
    getLastName();
    alert("Welcome "+name1+" "+name2);
}
