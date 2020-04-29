<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ResourcesCollections\ProductsResourceCollection;
use App\Http\Resources\ProductsResource;
use App\Product;

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
        $products = Product::find($id);
        return new ProductsResource($products);
    }
}
