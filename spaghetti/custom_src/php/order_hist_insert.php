<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "root", "F00L\$MUD!", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $phone_no = $data->phone_no;
  $date = $data->date;
  $active = $data->amt;

  $result = $conn->query('INSERT INTO order_hist (phone_no, date, amt) VALUES (\'' . $phone_no . '\',\'' . $date . '\',\'' . $amt . '\')');

  echo($result);

?>