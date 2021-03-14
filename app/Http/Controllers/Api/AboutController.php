<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;


class AboutController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return response(auth()->user()->email, 200)
            ->header('Content-Type', 'text/plain');
    }


    public function store(){
        return response(auth()->user()->email, 200)
            ->header('Content-Type', 'text/plain');
    }

    public function short(){
        return response('short', 200)
            ->header('Content-Type', 'text/plain');
    }
}
