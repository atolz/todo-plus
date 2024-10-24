import React, { useEffect } from "react";
import { Input } from "./input";
import Button from "./button";
import { TaksEdit, Task } from "./card-todo";

type Props = { type: "Add" | "Edit"; task?: Task; onAdd?: (title: string) => void; onEdit?: (id: number, task: TaksEdit) => void; onDelete: (id?: number) => void; reset: () => void };

const AddEditTaskPanel = ({ type, task, onAdd, onEdit, onDelete, reset }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [title, setTitle] = React.useState("");

  const handleSave = () => {
    if (type == "Add") {
      if (onAdd) {
        onAdd(title);
        setTitle("");
      }
    } else {
      if (onEdit && task) {
        onEdit(task.id, { title });
      }
    }
  };

  const handleDelete = () => {
    onDelete(task?.id);
    inputRef.current?.focus();
    setTitle("");
    reset();
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    setTitle(task?.title ?? "");
    inputRef.current?.focus();
  }, [task]);
  return (
    <div className="flex flex-col">
      <div className=" bg-primary flex items-center justify-center h-32 ">
        <h1 className=" text-lg text-white [text-shadow:_0_3px_0_var(--shadow)]">{type} Task</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col p-6 flex-1 ">
        <div>
          <label className="mb-2 block">Task Name</label>
          <Input ref={inputRef} type="text" value={title} onChange={handleInput} />
        </div>
        <div className="mt-auto flex items-center gap-4">
          <Button onClick={handleDelete} variant={"destructive"}>
            Delete
          </Button>
          <Button type="submit" onClick={handleSave} className="flex-1">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEditTaskPanel;
