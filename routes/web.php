<?php

use App\Http\Controllers\Pages\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');

require __DIR__.'/auth.php';
require __DIR__.'/workspace/workspace.php';
