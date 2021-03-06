<?php

use Illuminate\Support\Facades\Route;

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

//Route::get('/', function () {
//    return view('react');
//});

//
Route::get('/welcome', function () {
    return view('welcome');
});
//
Auth::routes();
//
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//response('Hello World', 200)
//    ->header('Content-Type', 'text/plain');


Route::get('/{path?}', [
    'uses' => function () {
        return view('react');
    },
    'as' => 'react',
    'where' => ['path' => '.*']
]);


