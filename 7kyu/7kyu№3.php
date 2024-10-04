<?php
function square_digits($num): int 
{
    $numberString = strval($num);
    $numberArray = str_split($numberString);//разбиваем на массив
    
    $result = " ";
    for($i=0;$i<strlen($numberString);$i++)
    {
        $result .= pow($numberArray[$i],2); //.= добавить к существующему
    }
    
    return intval($result);
}
?>