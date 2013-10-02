<?php

$name1="Linus";
$name2="Knausgård";

function getLastName(){
  global $name2;
  $name2="Carlsen";
  $name2=$_GET["name"];
}

function welcomeUser(){
  global $name1,$name2;
  getLastName();
  $name2=="Thorvalds" or die("Feil!");
  $name=$name1." ".$name2;
  for($i=0; $i<500; $i++)
    echo($name." Rocks");
}

welcomeUser();

?>