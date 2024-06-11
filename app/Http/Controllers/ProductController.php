<?php

namespace App\Http\Controllers;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    //
    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'image1_url' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'product_category_id' => 'required|integer',
            'product_name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'price' => 'required|integer',
            'stock_quantity' => 'required|integer',
            'minimum_quantity' => 'required|string|max:255'
        ]);


            Products::create([
                'image1_url' => $request->image1_url,
                'product_name' => $request->product_name,
                'product_category_id' => $request->product_category_id,
                'description' => $request->description,
                'price' => $request->price,
                'stock_quantity' => $request->stock_quantity,
                'minimum_quantity' => $request->minimum_quantity,
            ]);

            return redirect()->route('adminpage')->with('success', 'Product Added');

    }

    public function destroy($id)
    {
        $item = Products::find($id);
        $item->delete();

        // Return a response
        return redirect()->route('adminpage')->with('success', 'Product Deleted');

    }

    public function update(Request $request, $id)
    {
        // Validate the request
        $request->validate([
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'product_category_id' => 'required|integer',
            'product_name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'price' => 'required|integer',
            'stock_quantity' => 'required|integer',
        ]);

        // Find the product
        $product = Products::findOrFail($id);

        // Handle the image upload
        if ($request->hasFile('image')) {
            // Delete the old image if it exists
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }

            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $path = $image->storeAs('images', $imageName, 'public');
            $product->image = $path;
        }

        // Update the product details
        $product->product_category_id = $request->input('product_category_id');
        $product->product_name = $request->input('product_name');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->stock_quantity = $request->input('stock_quantity');

        // Save the product
        $product->save();

        return redirect()->route('adminpage')->with('success', 'Product Updated');
    }

}
