<?php
function enough($cap, $on, $wait)
{
  $result = $cap - $on;
  if ($result >= $wait)
  {
    return 0;
  }
  else 
  {
      return $wait - $result;
  }
}
?>