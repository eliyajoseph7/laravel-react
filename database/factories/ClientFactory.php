<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Client;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;


$factory->define(Client::class, function (Faker $faker) {
    return [
        'firstname' => $faker->firstname,
        'lastname' => $faker->lastname,
        'phone' => $faker->phoneNumber,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => Hash::make($faker->password),
        'username'=> $faker->username,
        'gender' => $faker->randomElement(['m', 'f']),
        'city' => $faker->randomElement(['Dar es Salaam', 'Mwanza', 'Arusha', 'Mbeya', 'Tanga', 'Morogoro', 'Mara', 'Kagera', 'Moshi']),
        'district' => $faker->randomElement(['ilala', 'rorya', 'moshi', 'kyela', 'mombo', 'Morogoro', 'bukoba', 'muleba', 'rombo',
                                            'tarime', 'majengo', 'arusha', 'kijenge', 'hai', 'kinondoni', 'kisesa', 'igoma', 'tanga']),
        'street' => $faker->randomElement(['utegi', 'sirari', 'nkende', 'buza', 'majengo', 'mwananyamala', 'boko', 'nyegezi', 'mkolani',
                                            'mawenzi', 'bigwa','sabasaba', 'kilimahewa', 'lushoto', 'mnazini', 'miembeni', 'nyakato']),
    ];
});
