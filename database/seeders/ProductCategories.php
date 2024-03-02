<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ProductCategories extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product__categories')->insert([
            [
            'category_name' => 'Buah',
            ],
            [
            'category_name' => 'Sayur',
            ],
            [
            'category_name' => 'parsel',
            ]
        ]);
    }
}
