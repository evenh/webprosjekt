function dumpArray()
{    
    var names=["Alfred","Bjarne", "Linus", "Erna", "Jens", "Kjell-Aril"];    
    for(var n in names){
		document.writeln(names[n]+"<br>");
    }    
}
