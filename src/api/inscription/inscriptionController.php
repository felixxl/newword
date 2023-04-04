<?php
session_start();

// Vérifie si l'utilisateur est déjà connecté, s'il l'est, redirigez-le vers la page d'accueil
if (isset($_SESSION['user'])) {
  header('Location: index.php');
  exit;
}

// Inclut la configuration de la base de données et les fonctions d'accès aux données
include 'config.php';
include 'functions.php';

// Initialise les variables pour stocker les valeurs soumises par le formulaire
$username = '';
$password = '';
$errors = [];

// Vérifie si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Récupère les données soumises par le formulaire
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Vérifie que les champs sont remplis
  if (empty($username)) {
    $errors[] = 'Le nom d\'utilisateur est obligatoire.';
  }
  if (empty($password)) {
    $errors[] = 'Le mot de passe est obligatoire.';
  }

  // Vérifie si l'utilisateur existe déjà
  if (userExists($pdo, $username)) {
    $errors[] = 'Le nom d\'utilisateur est déjà utilisé.';
  }

  // Si aucune erreur n'a été détectée, ajoute un nouvel utilisateur administrateur à la base de données
  if (empty($errors)) {
    // Hash le mot de passe pour le stocker en toute sécurité
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Ajoute l'utilisateur administrateur à la base de données
    addUser($pdo, $username, $hashedPassword);

    // Redirige l'utilisateur vers la page de connexion
    header('Location: login.php');
    exit;
  }
}

// Affiche le formulaire d'inscription
?>
<!DOCTYPE html>
<html>
<head>
  <title>Inscription Admin</title>
</head>
<body>
  <h1>Inscription Admin</h1>
  <?php if (!empty($errors)): ?>
    <!-- <div className="errors"> -->
      <div>
      <?php foreach ($errors as $error): ?>
        <p><?php echo $error; ?></p>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>
  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <div>
      <label for="username">Nom d'utilisateur :</label>
      <input type="text" id="username" name="username">
    </div>
    <div>
      <label for="password">Mot de passe :</label>
      <input type="password" id="password" name="password">
    </div>
    <div>
      <label for="confirm_password">Confirmation du mot de passe :</label>
      <input type="password" id="confirm_password" name="confirm_password">
    </div>
    <input type="submit" value="S'inscrire">
  </form>
</body>
</html>



