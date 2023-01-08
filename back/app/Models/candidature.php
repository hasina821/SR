<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class candidature extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom',
        'prenom',
        'email',
        'es',
       	'state',
        'refoffre',
        'cv',
        'lm',
        'ecole',
    ];
}
