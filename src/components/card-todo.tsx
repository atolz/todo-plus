import React from "react";
import Button from "./button";
import { cn } from "../lib/utils";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type TodoCard = { task: Task; onToggleComplete: (task: Task, completed: boolean) => void; onEdit: (task: Task) => void };

export type TaksEdit = Partial<Pick<Task, "title" | "completed">>;

const TodoCard = ({ task, onToggleComplete, onEdit }: TodoCard) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("toggle is", e.target.checked);
    onToggleComplete(task, e.target.checked);
  };
  return (
    <div className=" bg-backgroud flex items-center gap-2 justify-between p-6 py-5 rounded-md border shadow-md">
      <div className="flex gap-4 items-center cursor-pointer">
        <input
          id={`${task.id}`}
          type="checkbox"
          checked={task.completed}
          onChange={handleInput}
          value={task.title}
          className="w-8 h-8 checked:bg-friendly checked:border-[#399649] bg-gray-100 border-2 border-secondary rounded-full focus:ring-secondary"
        />
        <label htmlFor={`${task.id}`} className={cn("ms-2 cursor-pointer text-lg font-medium text-secondary", task.completed ? " text-gray-400 line-through" : "")}>
          {task.title}
        </label>
      </div>
      <Button onClick={() => onEdit(task)} variant={"secondary"} size={"sm"}>
        Edit
      </Button>
    </div>
  );
};

export default TodoCard;
