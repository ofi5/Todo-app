import { Component } from '@angular/core';
import { TodoSyntax } from '../../todo-syntax';
import { NgFor, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';



@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgForOf, TodoItemComponent,AddTodoComponent,NgIf,NgTemplateOutlet],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todos:TodoSyntax[]

  // localItem:string | null
  
  constructor() {
    // this.localItem = localStorage.getItem("todos")

    // if (this.localItem ===null){
      this.todos = [{
        sno:0,
        title:"My To do App",
        desc: "Try this to do App",
        active: true
      }]  
    // }else{

      // this.todos = JSON.parse(this.localItem)

    // }

    // this.todos = []
    
  }

  deleteTodo(todo:TodoSyntax){
    console.log(todo)
    const index =this.todos.indexOf(todo)
    this.todos.splice(index,1)
    // localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  addTodo(todo:TodoSyntax){
    console.log(todo)
    this.todos.push(todo)
    // localStorage.setItem("todos",JSON.stringify(this.todos))
    
  }

  strikeTodo(todo:TodoSyntax){
    todo.active = !todo.active
  }
}
