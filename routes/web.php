<?php

use App\Http\Controllers\ProfileController;
use App\Models\Discount;
use App\Models\Products;
use App\Models\Product_Categories;
use App\Models\Discount_Categories;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    $DataProduct = Products::with('ProductCategories')->get();
    $DataDiscount = Discount::with('DiscountCategories')->get();
    $ProductCategories = Product_Categories::all();
    return Inertia::render('Homepage', [
        'DataProduct' => $DataProduct,
        'DataDiscount' => $DataDiscount,
        'ProductCategory' => $ProductCategories
    ]);
})->name('homepage');

Route::get('/discount', function () {
    $DataProduct = Products::with('ProductCategories')->get();
    $DataDiscount = Discount::with('DiscountCategories', 'Products')->get();
    $ProductCategories = Discount_Categories::all();
    return Inertia::render('Discountpage', [
        'DataProduct' => $DataProduct,
        'DataDiscount' => $DataDiscount,
        'ProductCategory' => $ProductCategories
    ]);
})->name('discountpage');

Route::get('/admin', function () {
    $DataProduct = Products::with('ProductCategories')->get();
    $DataDiscount = Discount::with('DiscountCategories', 'Products')->get();
    $ProductCategories = Discount_Categories::all();
    return Inertia::render('Adminpage', [
        'DataProduct' => $DataProduct,
        'DataDiscount' => $DataDiscount,
        'ProductCategory' => $ProductCategories
    ]);
})->name('adminpage');

Route::get('/wishlist', function () {
    $DataProduct = Products::with('ProductCategories')->get();
    $DataDiscount = Discount::with('DiscountCategories', 'Products')->get();
    $ProductCategories = Discount_Categories::all();
    return Inertia::render('Wishlistpage', [
        'DataProduct' => $DataProduct,
        'DataDiscount' => $DataDiscount,
        'ProductCategory' => $ProductCategories
    ]);
})->name('wishlistpage');

// Route::get('/Login', function () {
//     return Inertia::render('/Login');
// });

// Route::group(['middleware' => ['auth']], function () {
//     Route::get('/logout', ['ProfileController@logout'])->name('logout.perform');
// });


Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::delete('/product/{id}', [ProductController::class, 'destroy'])->name('product.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';