<?php
ob_start();
include 'conexion_1.php';

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset(
    $_POST['nombre'],
    $_POST['correo'],
    $_POST['contraseña'],
    $_POST['celular']
)) {
    $nombre           = $_POST['nombre'];
    $correo           = $_POST['correo'];
    $password_hash    = password_hash($_POST['contraseña'], PASSWORD_DEFAULT);
    $celular          = $_POST['celular'];

    $stmt = $conn->prepare("
        INSERT INTO administradores 
            (nombre, correo, contraseña, celular)
        VALUES (?, ?, ?, ?)
    ");

    if ($stmt === false) {
        die("Error en la preparación: " . $conn->errorInfo()[2]);
    }

    if ($stmt->execute([$nombre, $correo, $password_hash, $celular])) {
        ob_end_clean();
        header("Location: index.php");
        exit();
    } else {
        $error = $stmt->errorInfo();
        echo "Error al ejecutar: " . $error[2];
    }

} else {
    echo "Error: acceso no permitido o faltan datos.";
}
ob_end_flush();
?>