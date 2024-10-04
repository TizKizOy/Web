<?php
function multiples(int $m, float $n): array {
    for ($i = 1; $i <= $m; $i++)
  {
      $array[$i-1] = (float)$n * $i;
      
  }
    return $array;
  }
?>