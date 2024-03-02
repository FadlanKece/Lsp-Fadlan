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
            'minimum_qty' => '/sisir',
            'stock_quantity' => '50',
            'image1_url' => 'https://th.bing.com/th?q=Banana&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-ID&cc=ID&setlang=en&adlt=strict&t=1&mw=247',
            ],
            [
            'product_category_id' => '1',
            'product_name' => 'Apel',
            'description' => 'Buah Apel segar yang baru dipetik dan terjaga kualitasnya',
            'price' => '20000',
            'minimum_qty' => '/kg',
            'stock_quantity' => '50',
            'image1_url' => 'https://th.bing.com/th/id/OIP.VCgRxWcTx836WafFitRx0AHaIn?w=173&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            ],
            [
            'product_category_id' => '1',
            'product_name' => 'Jeruk',
            'description' => 'Buah Jeruk segar yang baru dipetik dan terjaga kualitasnya',
            'price' => '21000',
            'minimum_qty' => '/kg',
            'stock_quantity' => '50',
            'image1_url' => 'https://th.bing.com/th?q=Orange+Fruit&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-ID&cc=ID&setlang=en&adlt=strict&t=1&mw=247',
            ],
            [
            'product_category_id' => '1',
            'product_name' => 'Semangka',
            'description' => 'Buah Semangka segar yang baru dipetik dan terjaga kualitasnya',
            'price' => '35000',
            'minimum_qty' => '/pcs',
            'stock_quantity' => '30',
            'image1_url' => 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//102/MTA-71452686/no-brand_buah-semangka-merah-tanpa-biji-per-buah-4-5-kg_full01.jpg',
            ],
            [
            'product_category_id' => '1',
            'product_name' => 'Melon',
            'description' => 'Buah melon segar yang baru dipetik dan terjaga kualitasnya',
            'price' => '30000',
            'minimum_qty' => '/pcs',
            'stock_quantity' => '30',
            'image1_url' => 'https://www.youngontop.com/wp-content/uploads/2023/11/Premium-Photo-_-Melon-isolated-on-white-with-clipping-path.jpeg',
            ],
            [
            'product_category_id' => '2',
            'product_name' => 'Kangkung',
            'description' => 'Sayur kangkung segar yang baru dipetik dan terjaga kualitasnya',
            'price' => '6000',
            'minimum_qty' => '/ikat',
            'stock_quantity' => '50',
            'image1_url' => 'https://i0.wp.com/umsu.ac.id/berita/wp-content/uploads/2023/07/Kangkung.jpg?fit=1200%2C900&ssl=1',
            ],
            [
            'product_category_id' => '2',
            'product_name' => 'Bayam',
            'description' => 'Sayur bayam segar yang baru dipetik dan terjaga kualitasnya',
            'price' => '6000',
            'minimum_qty' => '/ikat',
            'stock_quantity' => '50',
            'image1_url' => 'https://akcdn.detik.net.id/visual/2018/07/11/cc01493c-6a04-4bea-b33d-3be0086c9f09_169.jpeg?w=650',
            ],
        ]);
    }
}
