<?php
function square_sum($numbers) : int {
    $sum = 0;
   for($i = 0; $i < count($numbers); $i++)
    {
      $sum += pow($numbers[$i],2);
    }
    return $sum;
  }
?>