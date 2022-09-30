<?php

use App\Http\Controllers\TodoListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


route::get('data',[TodoListController::class,'GetTasks']);
route::get('data/{id}',[TodoListController::class,'GetTasksId']);
route::post('add',[TodoListController::class,'AddNewTask']);
route::put('update/{id}',[TodoListController::class,'UpdateTask']);
route::delete('delete/{id}',[TodoListController::class,'DeleteTask']);
