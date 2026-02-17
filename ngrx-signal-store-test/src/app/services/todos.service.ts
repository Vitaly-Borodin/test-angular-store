import { Injectable } from "@angular/core";

import { TODOS } from "../model/mock-data";
import { Todo } from "../model/todo.model";

@Injectable({
  providedIn: "root"
})
export class TodosService {

  public async getTodos(): Promise<Todo[]> {
    await sleep(1000);
    return TODOS;
  }

  public async addTodo(todo: Todo): Promise<Todo> {
    await sleep(1000);
    todo.id = Math.random().toString().substring(2, 9);

    return todo;
  }


}

async function sleep(ms: number) {
  return new Promise(resolve =>
    setTimeout(resolve, ms));
}

