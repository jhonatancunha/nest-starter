import { TodoItem } from '../../todo-item/entities/todo-item.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @OneToMany((type) => TodoItem, (todoItem) => todoItem.category)
  todoItems: TodoItem[];
}
