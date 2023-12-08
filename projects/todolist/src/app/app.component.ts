import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <h1>La liste des choses a faire <h1>

  <ul *ngFor="let todo of todoList">
      <li *ngIf="!todo.isCompleted">{{ todo.title }}</li>
  </ul>
  `,
  styles: []
})
export class AppComponent {

  todoList = TODOS;

  ngOnInit(){
    console.table(this.todoList);
  }
  
}
