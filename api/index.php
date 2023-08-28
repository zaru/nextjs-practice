<?php
// 適当なJSONを返すモックAPIサーバ
header('Content-Type: application/json; charset=utf-8');
header( 'Cache-Control: no-store, no-cache, must-revalidate');
$sleep = $_GET['sleep'] ?? 0;
sleep($sleep);
echo json_encode([
    'message' => 'Hello, World!2',
]);
