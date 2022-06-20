import { expect } from 'chai';
import sinon from 'sinon';
import { Todo, TodoLifeCycle, TodoStatus } from '../../../core/entities';
import { CreateTodoCommand, CliLine } from '..';

describe('Interface - CLI', () => {
  describe('create-todo', () => {
    it('create-todo', async () => {
      const create_todo_use_case_mock = {
        create: sinon.fake.resolves(TodoLifeCycle.CreateSuccess),
      };

      const create_todo_command = new CreateTodoCommand(
        create_todo_use_case_mock
      );

      const fake_todo: Todo = {
        name: 'yolo',
        status: TodoStatus.Active,
        user: 'yolo',
      };

      const fake_lie: CliLine = {
        line: fake_todo,
      };

      const result = await create_todo_command.cmd(fake_lie);

      expect(result).to.be.eqls({ result: TodoLifeCycle.CreateSuccess });
    });
  });
});
