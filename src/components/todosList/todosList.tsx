import { Todo } from "@/models/Todo";
import styles from "./todosList.module.scss";
import { FC } from "react";
import { TodoCard } from "../todoCard";

interface TodosListProps {
  todos: Todo[];
}

export const TodosList: FC<TodosListProps> = (props) => {
  const { todos } = props;
  return (
    <section className={styles.todos}>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
