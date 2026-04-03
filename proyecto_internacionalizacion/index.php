<?php
include 'conexion_1.php';

// Cargar usuarios de la base de datos
try {
    $stmt = $conn->prepare("SELECT id, correo FROM usuarios_personalizados ORDER BY correo");
    $stmt->execute();
    $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Error al cargar usuarios: " . $e->getMessage());
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Sistema</title>
<link rel="stylesheet" href="./assets/css/styles_menu.css"></head>
<body>
    
    <form action="login_usuario.php" method="post" class="contenedor_formulario">
        <h2>Login Usuario</h2>

        <?php
        // Mostrar mensaje de error si existe
        if (isset($_GET['error'])) {
            echo '<p style="color: red; text-align: center;">';
            if ($_GET['error'] == 'datos') {
                echo 'Usuario, contraseña incorrectos';
            } elseif ($_GET['error'] == 'vacio') {
                echo '⚠️ Por favor completa todos los campos';
            }
            echo '</p>';
        }
        ?>

        <label>Seleccionar Usuario:</label><br>
        <select name="id" required>
            <option value="">-- Selecciona un usuario --</option>
            <?php foreach ($usuarios as $usuario): ?>
                <option value="<?php echo htmlspecialchars($usuario['id']); ?>">
                    ID: <?php echo htmlspecialchars($usuario['id']); ?> - 
                    <?php echo htmlspecialchars($usuario['correo']); ?> 
                </option>
            <?php endforeach; ?>
        </select><br><br>

        <label>Password:</label><br>
        <input type="password" name="password_usu" required><br><br>

        <button type="submit">Ingresar</button>
        <button type="button" onclick="window.location.href='formulario_usuario.html'">Registrar Nuevo Usuario</button>
    </form>
    
</body>
</html>