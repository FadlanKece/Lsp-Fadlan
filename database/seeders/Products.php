<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class Products extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            [
            'product_category_id' => '1',
            'product_name' => 'Pisang',
            'description' => 'Buah pisang segar yang baru dipetik dan terjaga kualitasnya',
            'price' => '15000',
            'stock_quantity' => '50',
            'image1_url' => 'https://th.bing.com/th?q=Banana&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-ID&cc=ID&setlang=en&adlt=strict&t=1&mw=247',
            ],
            [
            'product_category_id' => '1',
            'product_name' => 'Apel',
            'description' => 'Buah Apel segar yang baru dipetik dan terjaga kualitasnya',
            'price' => '20000',
            'stock_quantity' => '50',
            'image1_url' => 'https://th.bing.com/th/id/OIP.VCgRxWcTx836WafFitRx0AHaIn?w=173&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            ],
            [
            'product_category_id' => '1',
            'product_name' => 'Jeruk',
            'description' => 'Buah Jeruk segar yang baru dipetik dan terjaga kualitasnya',
            'price' => '21000',
            'stock_quantity' => '50',
            'image1_url' => 'https://th.bing.com/th?q=Orange+Fruit&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-ID&cc=ID&setlang=en&adlt=strict&t=1&mw=247',
            ],
            [
            'product_category_id' => '1',
            'product_name' => 'Semangka',
            'description' => 'Buah Semangka segar yang baru dipetik dan terjaga kualitasnya',
            'price' => '35000',
            'stock_quantity' => '30',
            'image1_url' => 'hhttps://th.bing.com/th/id/OIP.TxxaHmD0BQfQWixYb6bq4wHaGR?w=231&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            ],
        ]);
    }
}
