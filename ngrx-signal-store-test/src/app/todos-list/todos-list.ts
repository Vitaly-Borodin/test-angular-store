import { Component, inject } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatSelectionList, MatListOption } from '@angular/material/list';

import { TodosStore } from '../store/todos.store';

@Component({
  selector: 'todos-list',
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatSuffix,
    MatLabel,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatSelectionList,
    MatListOption
  ],
  templateUrl: './todos-list.html',
  styleUrl: './todos-list.scss',
})
export class TodosList {
  public store = inject(TodosStore);

  async onAddTodo(title: string) {
    await this.store.addTodo(title);
  }

}
