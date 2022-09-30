<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TodoList extends Model
{
     
    protected $table = 'todo_lists';

    protected $fillable =  [ 'Task', 'Description'];

    public $timestamps=false;
}
