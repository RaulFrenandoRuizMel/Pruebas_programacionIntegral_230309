<?php
session_start();
include 'conexion_1.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['id'], $_POST['contraseña'])) {
    
    $id = $_POST['id'];
    $password = $_POST['contraseña'];
    //$rol_seleccionado = $_POST['rol'];
    
    // Validar que no estén vacíos
    if (empty($id) || empty($password)) {
        header("Location: index.php?error=vacio");
        exit();
    }
    
    try {
        // Buscar el usuario por ID
        $stmt = $conn->prepare("SELECT id, correo, contraseña FROM usuarios_personalizados WHERE id = ?");
        $stmt->execute([$id]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Verificar si el usuario existe
        if ($user) {
            
            // Verificar contraseña
            if (password_verify($password, $user['contraseña'])) {
                
                // Login exitoso - Crear sesión
                session_regenerate_id(true);

                $_SESSION['user_id'] = $user['id'];
                $_SESSION['usuario'] = $user['correo'];
                $_SESSION['loggedin'] = true;
        
            } else {
                // Contraseña incorrecta
                header("Location: index.php?error=datos_contrasena");
                exit();
            }
            
        } else {
            // Usuario no encontrado
            header("Location: index.php?error=datos_usuario");
            exit();
        }
        
    } catch (PDOException $e) {
        die("Error en la consulta: " . $e->getMessage());
    }
    
} else {
    header("Location: menu.html");
    exit();
}
?>