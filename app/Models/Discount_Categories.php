<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount_Categories extends Model
{
    use HasFactory;
    protected $table = 'discount__categories';

    public function discounts()
    {
        return $this->hasMany(Discount_Categories::class, 'category_discount_id');
    }
}
