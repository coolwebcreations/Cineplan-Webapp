<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("myServer", "myUser", "myPassword", "myBase");

$result = $conn->query("SELECT movie, showdate, showtime FROM cineplan_shows");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"movie":"'  . $rs["movieid"] . '",';
    $outp .= '"showdate":"'   . $rs["showdate"]        . '",';
    $outp .= '"showtime":"'. $rs["showtime"]     . '"}'; 
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
