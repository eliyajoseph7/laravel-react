<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        factory(App\Product::class, 100)->create()->each(function($products){
            $products->save();
            });
        
        factory(App\Client::class, 100)->create()->each(function($clients){
            $clients->save();
            });
        
        factory(App\Sale::class, 100)->create()->each(function($sales){
            $sales->save();
            });
        
    }
}
