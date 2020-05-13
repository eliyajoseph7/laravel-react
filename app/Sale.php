<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Sale extends Model
{
    use Notifiable;
    
    protected $fillable = [
            'product_id',
            'client_id',
    ];

    public function client(){
        return $this->belongsTo(Client::class);
    }

    public function product(){
        return $this->hasMany(Product::class);
    }
}
