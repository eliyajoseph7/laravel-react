<?php

namespace App\Http\Controllers\Charts;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductsResource;
use App\ProductCategory;
use App\Sale;

class SalesController extends Controller
{
    public function getSaleProductCategory(){
        $category_array = array();
        $product_categories = ProductCategory::orderBy('category', 'ASC')->distinct('category')->pluck('category');
        $product_categories = json_decode($product_categories);

        if(!empty($product_categories)){
            foreach ($product_categories as $category) {
                $category_name = $category;
                $category_array [] = $category_name;
            }
        }
        
    return $category_array;
    }

    public function getMonthlySalesCount($category){
        $monthlySales = Sale::join('products', 'sales.product_id', '=', 'products.id')
                            ->join('product_categories', 'products.category_id', '=', 'product_categories.id')
                            ->where('product_categories.category', $category)
                            ->get()->count('products');

        return $monthlySales;                    
    }

    public function index() : ProductsResource
    {
        $monthly_sales_count_array = array();
        $category_array = $this->getSaleProductCategory();
        $category_name_array =  array();

        if(!empty($category_array)){
            foreach($category_array as $category){
                $sales_product_count = $this->getMonthlySalesCount($category);
                array_push($monthly_sales_count_array, $sales_product_count);
                array_push($category_name_array, $category);
            }
        }
        $max_no = max($monthly_sales_count_array);
        $max = round(( $max_no + 10/2 ) / 10 ) * 10;

        $monthly_sales_data_array = array(
            'product_category' => $category_name_array,
            'sales_data' => $monthly_sales_count_array,
            'max' => $max
        );

        return new ProductsResource([$monthly_sales_data_array]);
    }
}
