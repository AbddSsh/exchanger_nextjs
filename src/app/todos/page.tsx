import { TodosList } from "@/components/todosList";
import { getTodos } from "@/shared/api/getData";

export default async function TodosPage() {
  const todos = await getTodos();
  return (
    <section>
      <h1>TODOS PAGE</h1>
      <TodosList todos={todos} />
    </section>
  );
}
