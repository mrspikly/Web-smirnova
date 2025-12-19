<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Калькулятор арифметических операций</title>
</head>
<body>
    <h2>Калькулятор</h2>
    <form action="" method="post">
        <input type="number" name="num1" placeholder="Первое число" required>
        <select name="operation" required>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
        </select>
        <input type="number" name="num2" placeholder="Второе число" required>
        <button type="submit">Вычислить</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $operation = $_POST['operation'];
        
        echo "Первое число: $num1<br>";
        echo "Второе число: $num2<br>";
        echo "Операция: ";
        
        switch ($operation) {
            case 'add':
                $result = $num1 + $num2;
                echo "сложение (+)";
                break;
            case 'subtract':
                $result = $num1 - $num2;
                echo "вычитание (-)";
                break;
            case 'multiply':
                $result = $num1 * $num2;
                echo "умножение (*)";
                break;
            case 'divide':
                if ($num2 != 0) {
                    $result = $num1 / $num2;
                    echo "деление (/)";
                } else {
                    $result = "Ошибка";
                }
                break;
            default:
                $result = "Неизвестная операция";
        }
        
        echo "<br>Результат: ";
        if ($result == "Ошибка") {
            echo "Деление на ноль невозможно!";
        } else {
            echo $result;
        }
    }
    ?>
</body>
</html>