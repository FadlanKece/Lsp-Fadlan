<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DiscountProducts extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('discounts')->insert([
            [
            'category_discount_id' => '1',
            'product_id' => '1',
            'start_date' => Carbon::create('2024', '03', '01'),
            'end_date' => Carbon::create('2024', '07', '01'),
            'percentage' => '15',
            ],
            [
            'category_discount_id' => '1',
            'product_id' => '2',
            'start_date' => Carbon::create('2024', '03', '01'),
            'end_date' => Carbon::create('2024', '07', '01'),
            'percentage' => '15',
            ],
            [
            'category_discount_id' => '2',
            'product_id' => '3',
            'start_date' => Carbon::create('2024', '05', '05'),
            'end_date' => Carbon::create('2024', '07', '05'),
            'percentage' => '20',
            ],
            [
            'category_discount_id' => '2',
            'product_id' => '4',
            'start_date' => Carbon::create('2024', '05', '05'),
            'end_date' => Carbon::create('2024', '07', '05'),
            'percentage' => '20',
            ],
        ]);
    }
}
