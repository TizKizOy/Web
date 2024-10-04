<?php
function removeEveryOther($array) {
    $newArray = [];
    $j = 0;
    for ($i = 0; $i < count($array); $i+=2)
    { 
      $newArray[$j++] = $array[$i];
      $j++;
    }
  return $newArray;
}
?>