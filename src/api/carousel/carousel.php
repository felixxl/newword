<?php
// Inclure le fichier de connexion à la base de données
require_once __DIR__ . '/../db_connexion.php';

// Traitement des requêtes POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Vérifier si l'image a été envoyée
    if (!isset($_FILES['image']['error']) || is_array($_FILES['image']['error'])) {
        http_response_code(400);
        exit;
    }

    // Valider le titre
    $title = $_POST['title'] ?? '';
    if (strlen($title) === 0) {
        http_response_code(400);
        exit;
    }

    // Traiter l'image et déterminer son type
    $targetDir = './upload/';
    $targetFile = $targetDir . basename($_FILES['image']['name']);
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Valider le type de l'image
    if ($imageFileType !== 'jpg' && $imageFileType !== 'jpeg' && $imageFileType !== 'png') {
        http_response_code(400);
        exit;
    }

    // Déplacer l'image dans le répertoire d'upload
  if (!move_uploaded_file($_FILES['image']['tmp_name'], __DIR__ . '/upload/' . basename($_FILES['image']['name']))) {
        http_response_code(500);
        exit;
    }

    // Vérifier si la connexion à la base de données est établie
    if ($pdo) {
        // Commencer une transaction
        $pdo->beginTransaction();

        try {
            // Insérer le titre et l'image dans la table carousel
            $sql = 'INSERT INTO carousel (title, file_path) VALUES (:title, :file_path)';
            $stmt = $pdo->prepare($sql);
            $stmt->execute(['title' => $title, 'file_path' => $targetFile]);

            // Valider la transaction
            $pdo->commit();

            // Envoyer une réponse JSON
            header('Content-Type: application/json');
            echo json_encode(['message' => 'L\'image a été ajoutée avec succès.']);
            exit;
        } catch (PDOException $e) {
            // Annuler la transaction en cas d'erreur
            $pdo->rollBack();
            http_response_code(500);
            exit;
        }
    }
}
// Traitement des requêtes GET
elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = 'SELECT id, title, file_path FROM carousel';
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $carouselData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($carouselData);
    exit;
}