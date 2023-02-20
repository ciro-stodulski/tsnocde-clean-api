import { Model } from 'mongoose';
import { ITodoCollection, todo_model } from 'src/infra/repositories';
import { Todo } from 'src/domain/entities';

export class TodoCollection implements ITodoCollection {
  private model: Model<Todo>;

  constructor(model?: Model<Todo>) {
    this.model = model || todo_model;
  }

  async save(todo: Todo): Promise<void> {
    await this.model.create(todo);
  }

  list(): Promise<Todo[]> {
    return this.model.find() as unknown as Promise<Todo[]>;
  }
}
