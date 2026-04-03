<?php
ob_start();
include 'conexion_1.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset(
    $_POST['nombre'],
    $_POST['correo'],
    $_POST['matricula'],
    $_POST['contraseña'],
    $_POST['fecha_de_ingreso'],
    $_POST['creditos_cursados'],
    $_POST['campus'],
    $_POST['nivel_de_ingles'],
    $_POST['segundo_idioma']
)) {
    $nombre           = $_POST['nombre'];
    $correo           = $_POST['correo'];
    $matricula        = $_POST['matricula'];
    $password_hash    = password_hash($_POST['contraseña'], PASSWORD_DEFAULT);
    $fecha_de_ingreso = $_POST['fecha_de_ingreso'];
    $creditos_cursados = (int) $_POST['creditos_cursados'];
    $campus           = (int) $_POST['campus'];
    $nivel_de_ingles  = $_POST['nivel_de_ingles'];
    $segundo_idioma   = $_POST['segundo_idioma'];

    $stmt = $conn->prepare("
        INSERT INTO usuarios_personalizados 
            (nombre, correo, matrricula, contraseña, fecha_de_ingreso, creditos_cursados, campus, nivel_de_ingles, segundo_idioma)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    if ($stmt === false) {
        die("Error en la preparación: " . $conn->errorInfo()[2]);
    }

    if ($stmt->execute([$nombre, $correo, $matricula, $password_hash, $fecha_de_ingreso, $creditos_cursados, $campus, $nivel_de_ingles, $segundo_idioma])) {
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