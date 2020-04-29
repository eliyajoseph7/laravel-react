<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ProductCategory;
use Faker\Generator as Faker;

$factory->define(ProductCategory::class, function (Faker $faker) {
    return [
        'category' => $faker->randomElement(['software', 'hardware', 'furniture', 'agriculture', 'electronics', 'sports', 'autopart'])
    ];
});
