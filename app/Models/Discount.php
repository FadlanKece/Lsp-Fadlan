<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;
    protected $table = 'discounts';
    public function Products()
    {
        return $this->belongsTo(Products::class, 'product_id');
    }

    public function DiscountCategories()
    {
        return $this->belongsTo(Discount_Categories::class, 'category_discount_id');
    }
}
