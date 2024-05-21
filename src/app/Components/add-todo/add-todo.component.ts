import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { TodoSyntax } from '../../todo-syntax';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  @Output() toAdd:EventEmitter<TodoSyntax> = new EventEmitter()

  addForm = new FormGroup({
    title: new FormControl(''),
    desc: new FormControl('')
  })

  submitApplication(){ 

    const newTodo = {
      sno: 8,
      title:this.addForm.value.title ?? '',
      desc:this.addForm.value.desc ?? '',
      active:true
    }
    this.toAdd.emit(newTodo)
  }
}
