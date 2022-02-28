<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <style>
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, monospace;
    </style>
    <?php
    date_default_timezone_set('Europe/Prague');
    echo "<h1>Datum a Čas</h1>";
    echo "<p>";


    $days = [
        "Pondělí", "Úterý", "Středa", 
        "Čtvrtek", "Pátek", "Sobota", 
        "Neděle",
    ];
    echo $days[date("N") - 1];
    echo " ";
    echo date("j. ");

    $months = [
        "leden", "únor", "březen", 
        "duben", "květen", "červen",
        "červenec", "srpen", "září",
        "říjen", "listopad", "prosinec"
    ];
    echo $months[date("n") - 1];
    echo date("h:i:s");
    
    $half = [
        "Dopoledne",
        "Odpoledne"
    ];
    echo $half[date("a") - 1;

    echo "</p>";
    echo "<ul>";

    echo "<li>";
    echo "Hodiny: ";

    $hour = intval(date("G"));
    for($i = 0; $i <= $hour; $i++) {
        echo "| ";
    };
    echo date("(G)");
    echo "</li>";

    echo "<li>";
    echo "Minuty: ";
    $minutes = intval(date("i"));
    for($i = 0; $i <= $minutes; $i++) {
        echo "| ";
    };
    echo date("(i)");
    echo "</li>";
    echo "<li>";
    echo "Sekundy: ";
    $seconds = intval(date("s"));
    for($i = 0; $i <= $seconds; $i++) {
        echo "| ";
    };
    echo date("(s)");
    echo "</li>";
    echo "</ul>";
    ?>
</body>
</html>
