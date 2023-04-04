<?php
$upload_folder = __DIR__ . '/carousel/upload'; 
if (isset($_GET['path'])) {
    $file_path = $upload_folder . '/' . $_GET['path'];

    if (file_exists($file_path)) {
        $mime = mime_content_type($file_path);
        header('Content-Type: ' . $mime);
        readfile($file_path);
    } else {
        http_response_code(404);
        echo 'File not found: ' . $file_path;
    }
} else {
    http_response_code(400);
    echo 'Missing "path" parameter';
}