<?php
$servername     = "localhost";
$username       = "root";
$password       = "";
$dbname         = "kinder";
 
try{
    $conn = new PDO("mysql:host = $servername" , $username, $password);
    $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
 
    //solo en caso de que no exista la base de datos
 
    $sql = "CREATE DATABASE IF NOT EXISTS $dbname";
    $conn -> exec($sql);
    //echo "la base de datos fue creada con exito<br>";
 
    //conectar la db
 
    $conn = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);
    //echo "Awebo, si se conecto";
}
catch(PDOException $e){
    echo "Connection Failed: ", $e -> getMessage();
}
 
 
?>