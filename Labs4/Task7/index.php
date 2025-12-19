<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Генератор паролей</title>
</head>
<body>
    <?php
    function generatePassword($length) {
        $lowercase = 'abcdefghijklmnopqrstuvwxyz';
        $uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $numbers = '0123456789';
        
        $allCharacters = $lowercase . $uppercase . $numbers;
        
        $charactersLength = strlen($allCharacters);
        
        $password = '';
        
        for ($i = 0; $i < $length; $i++) {
            $randomIndex = rand(0, $charactersLength - 1);
            $password .= $allCharacters[$randomIndex];
        }
        
        return $password;
    }
    
    echo "<h3>Генерация паролей:</h3>";
    
    $passwords = [
        8 => generatePassword(8),
        10 => generatePassword(10),
        12 => generatePassword(12),
        15 => generatePassword(15)
    ];
    
    foreach ($passwords as $length => $password) {
        echo "Пароль длиной $length символов: $password<br>";
    }
    
    echo "<br><h3>Примеры вызова функции:</h3>";
    echo "generatePassword(10): " . generatePassword(10) . "<br>";
    echo "generatePassword(6): " . generatePassword(6) . "<br>";
    echo "generatePassword(16): " . generatePassword(16) . "<br>";
    ?>
</body>
</html>