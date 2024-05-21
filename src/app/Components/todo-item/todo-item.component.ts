import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { TodoSyntax } from '../../todo-syntax';
import { TodoComponent } from '../todo/todo.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
  todo!: TodoSyntax;

  @Output() toDelete: EventEmitter<TodoSyntax> = new EventEmitter()
  @Output() toCheck: EventEmitter<TodoSyntax> = new EventEmitter()
constructor(){}

onDone(todo: TodoSyntax){
  this.toDelete.emit(todo)
  console.log("tobe remove3d")
}

onCheckboxClick(todo:TodoSyntax){

  this.toCheck.emit(todo)


}

}
