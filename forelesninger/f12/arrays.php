<?php

function dumpArray()
{    
  $names=array("Alfred","Bjarne", "Linus");
  foreach($names as $name){
    echo $name."<br>";
  }
}

dumpArray();

?>