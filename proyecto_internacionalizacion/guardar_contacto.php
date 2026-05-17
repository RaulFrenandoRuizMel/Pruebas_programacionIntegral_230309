<?php
ob_start();
include 'conexion_1.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset(
    $_POST['nombre'],
    $_POST['correo'],
    $_POST['matricula'],
    $_POST['creditos'],
    $_POST['programa'],
    $_POST['campus'],
    $_POST['mensaje']
)) {
    $nombre    = $_POST['nombre'];
    $correo    = $_POST['correo'];
    $matricula = (int) $_POST['matricula'];
    $creditos  = (int) $_POST['creditos'];
    $programa  = $_POST['programa'];
    $campus    = $_POST['campus'];
    $mensaje   = $_POST['mensaje'];

    $stmt = $conn->prepare("
        INSERT INTO mensajes_de_contacto
            (nombre, correo, matrricula, creditos, programa_intercambio, campus, mensaje)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ");

    if ($stmt === false) {
        die("Error en la preparación: " . $conn->errorInfo()[2]);
    }

if ($stmt->execute([$nombre, $correo, $matricula, $creditos, $programa, $campus, $mensaje])) {
    ob_end_clean();
    $origen = $_POST['pagina_origen'] ?? 'contacto.html';
    header("Location: " . $origen);
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