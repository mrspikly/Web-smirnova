<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Работа с ассоциативными массивами и foreach</title>
</head>
<body>
<?php
$users = [
    [
        "name" => "Иван",
        "age" => 25,
        "city" => "Москва"
    ],
    [
        "name" => "Анна",
        "age" => 30,
        "city" => "Санкт-Петербург"
    ],
    [
        "name" => "Петр",
        "age" => 22,
        "city" => "Казань"
    ],
    [
        "name" => "Мария",
        "age" => 28,
        "city" => "Екатеринбург"
    ]
];

echo "<h2>Информация о пользователях</h2>";

echo "<ul>";

foreach ($users as $user) {
    echo "<li>";
    echo "Имя: " . $user["name"] . ", ";
    echo "Возраст: " . $user["age"] . ", ";
    echo "Город: " . $user["city"];
    echo "</li>";
}

echo "</ul>";
?>
</body>
</html>