<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $fillable = [
        'product_category_id',
        'product_name',
        'description',
        'price',
        'stock_quantity',
        'image',
    ];


    public function ProductCategories()
    {
        return $this->belongsTo(Product_Categories::class, 'product_category_id');
    }

    public function Discounts()
    {
        return $this->hasMany(Products::class, 'product_id');
    }
}
