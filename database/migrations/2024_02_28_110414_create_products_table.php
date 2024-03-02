<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_category_id')->constrained(table: 'product__categories', indexName: 'id')->onUpdate('cascade')
            ->onDelete('cascade');
            $table->string('product_name');
            $table->text('description');
            $table->integer('price');
            $table->integer('stock_quantity');
            $table->string('image1_url');
            $table->string('minimum_qty');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
