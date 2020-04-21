<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Resources\ResourcesCollections\NewsResourceCollection;
use App\Http\Resources\NewsResource;
use App\Http\Controllers\Controller;
use App\News;

class NewsController extends Controller
{
    //
    public function index() : NewsResourceCollection
    {
        $news = News::all();
        return new NewsResourceCollection($news);
    }
}
