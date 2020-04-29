<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'product_name' => $faker->name,
        'short_description' => $faker->sentence,
        'description' => $faker->paragraph,
        'category_id' => function () {
            return factory(App\ProductCategory::class)->create()->id;
        },
        'price' => $faker->randomFloat(2, 0, 10000),
        'image' => $faker->imageUrl(640,480),

        // 'image' => $faker->image('public/storage/images',640,480, null, false),
    ];
});
