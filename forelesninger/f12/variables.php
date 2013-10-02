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
  echo("Welcome ".$name1." ".$name2);
}

welcomeUser();

?>