import { getTodo } from "@/shared/api/getData";
import { Metadata, ResolvingMetadata } from "next";

interface TodoPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: TodoPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const todo = await getTodo(id);

  return {
    title: todo.title,
    description: todo.title,
  };
}

export default async function TodoPage(props: TodoPageProps) {
  const { id } = props.params;
  const todo = await getTodo(id);
  return (
    <section>
      <h1>
        {todo.id}. {todo.title}
      </h1>
    </section>
  );
}
