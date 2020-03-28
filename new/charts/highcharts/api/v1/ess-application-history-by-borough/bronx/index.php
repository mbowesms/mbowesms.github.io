<?php
$mysqli = new mysqli("localhost", "tracker", "tracker", "tracker");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

/* Prepared statement, stage 1: prepare */
if (!($stmt = $mysqli->prepare("SELECT COUNT(application_date) AS applications_submitted, SUM(program_complete) AS projects_completed, substring_index(substring_index(application_date, ' ', 1), '-', 1) AS year_completed FROM con_ed_sir WHERE division = 'Bronx' GROUP BY year_completed;"))) {
    echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

/* Prepared statement, stage 2: bind and execute */
if (!$stmt->execute()) {
    echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
} else {
    $result = $stmt->get_result();
    $response = [];
    foreach($result as $item)
        array_push($response,$item);
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
