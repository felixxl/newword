<?php
// Connexion à la base de données
$dsn = 'mysql:host=localhost;dbname=my_database;charset=utf8';
$username = 'my_username';
$password = 'my_password';
$options = [
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_EMULATE_PREPARES => false,
];
$pdo = new PDO($dsn, $username, $password, $options);

// Récupération de la liste des articles
$stmt = $pdo->query('SELECT articles.id, articles.title, articles.description, articles.animator, photos.title
  AS photo_title, photos.file_path 
  AS photo_file_path 
  FROM articles LEFT 
  JOIN photos 
  ON articles.photo_id = photos.id');
$articles = $stmt->fetchAll();

// Conversion des données en JSON
header('Content-Type: application/json');
echo json_encode($articles); 

