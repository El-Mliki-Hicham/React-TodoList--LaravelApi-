<?php

namespace App\Http\Controllers;

use App\Models\TodoList;
use Illuminate\Http\Request;

class TodoListController extends Controller
{
 function GetTasks() {
   $GetData =TodoList::all();
    return $GetData ; 
 }

function GetTasksId($id){
    $GetData = TodoList::where("id","=",$id)->get();
    return $GetData;
}

function AddNewTask(Request $request){

    $task = new TodoList();
    $task->Task =$request->Task;
    $task->Description =$request->Description;
    $result=$task->save();
    if ($result) {
        return ['good'];
    }
    else {
        return ["not good"];
    }

}

function UpdateTask(Request $request ,$id){

    $Data = TodoList::find($id);
    $Data->update($request->all());
    return $Data;
}

function DeleteTask($id){

    $data = TodoList::find($id);
    $data->delete();
}
}
