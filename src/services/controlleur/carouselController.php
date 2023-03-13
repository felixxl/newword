<?php
// Vérification de l'utilisateur admin
if ($_SESSION['user']['role'] !== 'admin') {
  http_response_code(401);
  exit;
}

// Traitement de la requête POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Vérification des paramètres
  if (!isset($_FILES['image']['error']) || is_array($_FILES['image']['error'])) {
    http_response_code(400);
    exit;
  }

  // Validation du titre
  $title = $_POST['title'] ?? '';
  if (strlen($title) === 0) {
    http_response_code(400);
    exit; 
  }

  // Traitement de l'image
  $targetDir = 'uploads/';
  $targetFile = $targetDir . basename($_FILES['image']['name']);
  $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

  // Vérification du type de fichier
  if ($imageFileType !== 'jpg' && $imageFileType !== 'jpeg' && $imageFileType !== 'png') {
    http_response_code(400);
    exit;
  }

  // Déplacement de l'image dans le répertoire d'uploads
  if (!move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
    http_response_code(500);
    exit;
  }

  // Insertion des données dans la base de données
  $sql = 'INSERT INTO images (title, file_path) VALUES (:title, :file_path)';
  $stmt = $pdo->prepare($sql);
  $stmt->execute([
    'title' => $title,
    'file_path' => $targetFile,
  ]);

  // Redirection vers la page d'accueil
  header('Location: index.php');
  exit;
}