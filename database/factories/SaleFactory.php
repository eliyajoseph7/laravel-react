<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Sale;
use Faker\Generator as Faker;

$factory->define(Sale::class, function (Faker $faker) {
    return [
        'client_id' => $faker->numberBetween($min = 1, $max = 100),
        'product_id' => $faker->numberBetween($min = 1, $max = 100),
    ];
});
