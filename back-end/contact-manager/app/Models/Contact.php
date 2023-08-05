<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    function user(){
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'first_name',
        'last_name',
        'image',
        'number',
        'number_type',
        'user_id',
        'contact_type',
        'is_favorite',
        'longitude',
        'lattitude',
    ];
}
