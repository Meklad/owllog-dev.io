<?php

namespace App;

use App\Traits\MessageScope;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use MessageScope;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'body', 'user_id'
    ];

    public function user()
    {
    	return $this->belongsTo(\App\User::class, 'user_id');
    }
}
