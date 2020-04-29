<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class ProductCategory extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

     protected $fillable = [
         'category'
     ];

     public function product(){
         return $this->hasMany(Product::class, 'category_id');
     }
}
