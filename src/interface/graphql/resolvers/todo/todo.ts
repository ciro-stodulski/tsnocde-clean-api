import { Query, Resolver } from 'type-graphql';
import { Container } from '../../../../main/container';
import { TodoResponse } from '../..';
import { Inject, Service } from 'typedi';

@Service()
@Resolver()
export class TodoResolver {
  constructor(@Inject('container') private container: Container) {}

  @Query(() => [TodoResponse])
  async getTodos(): Promise<TodoResponse[]> {
    return await this.container.list_todo_use_case.list();
  }
}
