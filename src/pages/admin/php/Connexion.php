<?php
session_start();
$pdo = new PDO('mysql:host=localhost;dbname=mydatabase', 'username', 'password');

// Vérification des informations d'identification
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'] ?? '';
  $password = $_POST['password'] ?? '';

  $stmt = $pdo->prepare('SELECT * FROM users WHERE username = ?');
  $stmt->execute([$username]);
  $user = $stmt->fetch();

  // Vérification des informations d'identification
  if ($user && password_verify($password, $user['password'])) {
    $_SESSION['user'] = ['id' => $user['id'], 'username' => $user['username'], 'role' => $user['role']];
    header('Location: admin.php');
    exit;
  } else {
    $errorMessage = 'Invalid username or password';
  }
}
?>

<!-- Formulaire de connexion -->
<form method="post">
  <div>
    <label for="username">Username</label>
    <input type="text" id="username" name="username">
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" id="password" name="password">
  </div>
  <button type="submit">Log in</button>
  <?php if (isset($errorMessage)) { ?>
    <div><?= $errorMessage ?></div>
  <?php } ?>
</form>