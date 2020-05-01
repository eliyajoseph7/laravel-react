<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Product extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [
        'product_name',
        'short_description',
        'description',
        'image',
        'price',
        'category_id'
   ];

   public function category(){
        return $this->belongsTo(ProductCategory::class);
   }
}
