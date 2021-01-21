<?php
$timezones = ["Asia/Seoul", "America/New_York"];
header('Content-Type: application/json');

// JSON화
echo json_encode($timezones);
?>