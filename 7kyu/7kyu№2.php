<?php
function disemvowel($string) {
    $vowels = array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
    $string = str_replace($vowels, "", $string);//search:ищет,replace:заменяет,subject:записывает
    return $string;
  }
?>