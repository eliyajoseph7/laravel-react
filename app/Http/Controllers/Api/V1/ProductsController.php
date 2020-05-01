<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ResourcesCollections\ProductsResourceCollection;
use App\Http\Resources\ProductsResource;
use Illuminate\Support\Facades\Input;
use App\Product;
use App\ProductCategory;

class ProductsController extends Controller
{
    //
    public function index(): ProductsResourceCollection
    {
        $products = Product::all();
        return new ProductsResourceCollection($products);
    }

    public function show($id): ProductsResource
    {
        $products = Product::join('product_categories', 'products.category_id', '=', 'product_categories.id')
                            ->where('products.id', $id)
                            ->first();
        
        // return $products;
        return new ProductsResource($products);
    }

    public function update(Product $product, Request $request) : ProductsResource
    {

       

        $product -> update($request -> all());
        $newCategory = $request -> input('category');
        $category = new ProductCategory;
        $category = $category::where('id', $product->category->id)->first();
        $category->category = $newCategory;
        $category->save();
        return new ProductsResource($product);
        
    }
}
