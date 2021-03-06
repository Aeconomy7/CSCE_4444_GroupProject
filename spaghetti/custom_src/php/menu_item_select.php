<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "******", "******", "******");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $result = $conn->query('SELECT * FROM menu_items');

  $outp = '';
  while($rs = $result->fetch_array()){
    if($outp != ""){ $outp .= ","; }
    $outp .= '{"type":"' . $rs["type"] . '",';
    $outp .= '"item_name":"' . $rs["item_name"] . '",';
    $outp .= '"price":"' . $rs["price"] . '",';
    $outp .= '"description":"' . $rs["description"] . '",';
    $outp .= '"ingredients":"' . $rs["ingredients"] . '",';
    $outp .= '"img_path":"' . $rs["img_path"] . '",';
    $outp .= '"iotd":"' . $rs["iotd"] . '"}';
  }

  $outp = '{"records":['.$outp.']}';

  echo($outp);
?>
