import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { useState } from "react";

interface Props {
  todo: Todo;
  // Acciones que quiero llamar
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export default function TodoItem({ todo, toggleTodo }: Props) {
  const [complete, setComplete] = useState<boolean>(todo.complete);
  const onToggleTodo = async () => {
    try {
      setComplete((prevComplete) => !prevComplete);
      await toggleTodo(todo.id, !complete);
    } catch (error) {
      // En caso de error, revertimos el estado local
      setComplete((prevComplete) => !prevComplete);
      console.error("Error:", error);
    }
  };

  return (
    <div className={complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={onToggleTodo}
          className={`
            flex p-2 rounded-md cursor-pointer
            hover:bg-opacity-60
            ${complete ? "bg-blue-100" : "bg-red-100"}
          `}
        >
          {complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>

        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
}
