<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Цикл for и простая функция</title>
</head>
<body>
    <?php
function printNumbers($start, $end) {

    if ($start > $end) {
        echo "Ошибка: начальное число больше конечного!<br>";
        return;
    }

    for ($i = $start; $i <= $end; $i++) {
        echo $i . "<br>";
    }
}

echo "Вывод чисел от 1 до 10:<br>";
printNumbers(1, 10);
?>
</body>
</html>