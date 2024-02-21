import { Todo } from "@/models/Todo";
import { paths } from "@/routing";
import Link from "next/link";
import { FC } from "react";
import styles from "./todoCard.module.scss";

interface TodoCardProps {
  todo: Todo;
}

export const TodoCard: FC<TodoCardProps> = (props) => {
  const { todo } = props;
  return (
    <Link className={`link ${styles.todo}`} href={`${paths.todos}/${todo.id}`}>
      {todo.id}. {todo.title}
    </Link>
  );
};
