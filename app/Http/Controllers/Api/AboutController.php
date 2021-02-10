<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;


class AboutController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }




    public function store(){
        return response('Hello World', 200)
            ->header('Content-Type', 'text/plain');
    }
}
