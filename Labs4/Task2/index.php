<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Арифметические операции и условные операторы</title>
</head>
<body>
    <?php
    $num1 = 15;
    $num2 = 7;

    $sum = $num1 + $num2;

    echo "Первое число: $num1<br>";
    echo "Второе число: $num2<br>";
    echo "Сумма: $sum<br><br>";

    if ($sum % 2 == 0) {
        echo "Сумма $sum является ЧЕТНЫМ числом.";
    } else {
        echo "Сумма $sum является НЕЧЕТНЫМ числом.";
    }
    ?>
</body>
</html>