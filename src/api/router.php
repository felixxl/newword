<?php

// Ajouter les en-têtes CORS
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding');
header('Access-Control-Allow-Credentials: true');

// Récupérer la route demandée
$requested_file = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Gérer les différentes routes
switch ($requested_file) {
  case '/carousel/carousel.php':
    require_once __DIR__ . '/carousel/carousel.php';
    break;
  case '/api/carousel/upload':
    require_once __DIR__ . '/image.php';
    break;
  case '/article/articles.php':
    require_once __DIR__ . '/article/articles.php';
    break;
  case '/api/article/upload.php':
    require_once __DIR__ . '/image.php';
    break;
  default:
    http_response_code(404);
    echo 'File not found: ' . $requested_file;
    exit;
}