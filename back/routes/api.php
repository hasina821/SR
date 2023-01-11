<?php

use App\Http\Controllers\CandidatureController;
use App\Http\Controllers\OfferController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(CandidatureController::class)->group(function() {
    Route::get('candidatures', 'getAll');
    Route::get('candidature/{id}', 'getOne');
    Route::get('candidature/byref/{ref}', 'getallwithref');
    Route::post('candidature', 'save');
    Route::put('candidature/update/{id}','update');
    Route::delete('candidature/delete/{id}','delete');
    Route::put('candidature/increment/{id}','incrementcolonne_id');
    Route::put('candidature/decrement/{id}','decrementcolonne_id');
    Route::put('candidature/update/id_colonne/{id}','stateupdatecandidature');
});

Route::controller(OfferController::class)->group(function() {
    Route::get('offers', 'getAll');
    Route::get('offer/{id}', 'getOne');
    Route::get('offercandidature/{ref}', 'getoffercandidature');
    Route::post('offer', 'save');
    Route::put('offer/update/{id}','update');
    Route::delete('offer/delete/{id}','destroy');
});

Route::controller(UserAuthController::class)->group(function() {
    Route::post('login', 'login')->name('login');
    Route::post('register', 'register');
    Route::post('profile-picture/{id}', 'addProfilePicture');
    Route::post('logout', 'logout');
    Route::post('refresh-token', 'refresh');
});
