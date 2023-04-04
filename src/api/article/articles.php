<?php

require_once __DIR__ . '/../db_connexion.php';

// Ajouter les en-têtes CORS
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (!isset($_POST['title']) || !isset($_POST['description']) || !isset($_POST['price']) || !isset($_POST['organizer']) || !isset($_POST['schedule'])) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Missing required form fields']);
    exit;
  }

  $title = $_POST['title'];
  $description = $_POST['description'];
  $price = $_POST['price'];
  $organizer = $_POST['organizer'];
  $schedule = $_POST['schedule'];

  $image_path = '';
  if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $upload_folder = __DIR__ . '/upload';
    $image_name = uniqid() . '-' . basename($_FILES['image']['name']);
    $image_path = $upload_folder . $image_name;

    // Vérification du type MIME de l'image
    $allowed_mime_types = ['image/jpeg', 'image/png'];
    $image_mime_type = mime_content_type($_FILES['image']['tmp_name']);
    if (!in_array($image_mime_type, $allowed_mime_types)) {
      http_response_code(400);
      header('Content-Type: application/json');
      echo json_encode(['error' => 'Invalid image format. Only JPEG and PNG formats are allowed.']);
      exit;
    }

    // Vérification que le dossier d'upload existe et a les bonnes permissions
    if (!is_dir($upload_folder) || !is_writable($upload_folder)) {
      http_response_code(500);
      header('Content-Type: application/json');
      echo json_encode(['error' => 'Unable to write to image upload folder']);
      exit;
    }

    // Déplacement de l'image vers le dossier d'upload
    if (!move_uploaded_file($_FILES['image']['tmp_name'], $image_path)) {
      http_response_code(500);
      header('Content-Type: application/json');
      echo json_encode(['error' => 'Unable to move uploaded image to destination folder']);
      exit;
    }
  }

  try {
    $stmt = $pdo->prepare('INSERT INTO articles (title, description, price, organizer, schedule, image_path) VALUES (:title, :description, :price, :organizer, :schedule, :image_path)');
    $stmt->execute([
      ':title' => $title,
      ':description' => $description,
      ':price' => $price,
      ':organizer' => $organizer,
      ':schedule' => $schedule,
      ':image_path' => $image_path
    ]);


  http_response_code(201);
  header('Content-Type: application/json');
  echo json_encode(['message' => 'Article created successfully']);
  } catch (PDOException $e) {
  http_response_code(500);
  header('Content-Type: application/json');
  echo json_encode(['error' => 'An error occurred while creating the article: ' . $e->getMessage()]);
  }
} 
// else {

//   http_response_code(405);
//   header('Content-Type: application/json');
//   echo json_encode(['error' => 'Method not allowed']);
// }
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  try {
    $stmt = $pdo->query('SELECT * FROM articles');
    $articles = $stmt->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode($articles);
  } catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'An error occurred while fetching the articles: ' . $e->getMessage()]);
  }
}