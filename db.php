<?php

$conn = new mysqli("localhost", "root", "root", "flight_db", 8889);

if ($conn->connect_error)
{
    die("Connection Failed");
}

?>