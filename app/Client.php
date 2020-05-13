<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Client extends Model
{
    
use Notifiable;

protected $fillable = [
            'firstname',
            'lastname',
            'phone',
            'email',
            'password',
            'username',
            'gender',
            'city',
            'region',
            'street',
];

    public function sale(){
        return $this->hasMany(Sales::class);
    }

    public function product(){
        return $this->hasMany(Product::class);
    }
}
