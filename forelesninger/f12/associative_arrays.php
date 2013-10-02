<?php
$people=array(
   array("name"=>"David Crockford", 
	 "knownFor"=>"JavaScript"),
   array("name"=>"Bjarne Stroustrup", 
	 "knownFor"=>"C++"),
   array("name"=>"Linus Thorvalds", 
	 "knownFor"=>"Linux")
	      );

function printPeople()
{   
  global $people;
  $html="";
  foreach($people as $p){
    $html.="<div class='person'>".
      "<div class='name'>".
      $p["name"].
      "</div><div class='knownFor'>".
      " is known for ".
      $p["knownFor"].
      "</div>".
      "</div>";
  }
  echo $html;
}