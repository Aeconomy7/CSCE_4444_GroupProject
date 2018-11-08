<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "root", "F00L\$MUD!", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $result = $conn->query('SELECT * FROM menu_items');

  $outp = '';
  while($rs = $result->fetch_array()){
    if($outp != ""){ $outp .= ","; }
    $outp .= '{"phone_no":"' . $rs["phone_no"] . '",';
    $outp .= '"sid":"' . $rs["sid"] . '",';
    $outp .= '"item_name":"' . $rs["item_name"] . '",';
    $outp .= '"price":"' . $rs["price"] . '",';
    $outp .= '"active":"' . $rs["active"] . '"}';
  }

  $outp = '{"records":['.$outp.']}';

  echo($outp);
?>
