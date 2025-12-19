<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Фильтрация товаров</title>
</head>
<body>
    <?php
    $products = [
        ['name' => 'Ручка', 'price' => 5, 'stock' => 100],
        ['name' => 'Ноутбук', 'price' => 1200, 'stock' => 10],
        ['name' => 'Блокнот', 'price' => 15, 'stock' => 50],
        ['name' => 'Мышь', 'price' => 45, 'stock' => 0],
        ['name' => 'Клавиатура', 'price' => 70, 'stock' => 20],
        ['name' => 'Карандаш', 'price' => 2, 'stock' => 200],
    ];

    echo "<h3>Все товары:</h3>";
    foreach ($products as $product) {
        echo "Название: " . $product['name'] . ", Цена: " . $product['price'] . ", Остаток: " . $product['stock'] . "<br>";
    }

    echo "<br><h3>Отфильтрованные товары (цена < 50 и остаток > 0):</h3>";

    // Фильтрация товаров
    $filtered_products = array_filter($products, function($product) {
        return $product['price'] < 50 && $product['stock'] > 0;
    });

    if (count($filtered_products) > 0) {
        foreach ($filtered_products as $product) {
            echo "Название: " . $product['name'] . ", Цена: " . $product['price'] . ", Остаток: " . $product['stock'] . "<br>";
        }
    } else {
        echo "Нет товаров, соответствующих условиям фильтра.";
    }
    ?>
</body>
</html>