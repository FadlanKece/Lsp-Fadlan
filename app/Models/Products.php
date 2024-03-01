<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $table = 'products';

    public function ProductCategories()
    {
        return $this->belongsTo(Product_Categories::class, 'product_category_id');
    }
}
