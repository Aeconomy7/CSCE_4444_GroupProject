<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "******", "******", "******");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $takeout_name = $data->takeout_name;

  $result = $conn->query('UPDATE takeout_items SET active=\'0\' WHERE takeout_name=\'' . $takeout_name . '\'');

  echo($result);
?>
