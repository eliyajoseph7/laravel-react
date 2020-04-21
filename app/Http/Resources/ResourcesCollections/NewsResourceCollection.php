<?php

namespace App\Http\Resources\ResourcesCollections;

use Illuminate\Http\Resources\Json\ResourceCollection;

class NewsResourceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
