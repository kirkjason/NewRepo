import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage {
  tasks: string[] = [];
  newTask: string;

  addTask() {
    if (this.newTask && this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  removeTask(task: string) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
