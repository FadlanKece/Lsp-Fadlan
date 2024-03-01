<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_Categories extends Model
{
    use HasFactory;
    protected $table = 'product__categories';

    public function products()
    {
        return $this->hasMany(Product_Categories::class, 'product_category_id');
    }
}
