import { TodoType } from './type';
export class Todo {
  public readonly id: string;
  public text: string;

  constructor(todo: TodoType) {
    this.id = todo.id as string;
    this.text = todo.text;
  }
}
