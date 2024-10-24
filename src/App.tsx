import React from "react";
import "./App.css";
import TodoCard, { TaksEdit, Task } from "./components/card-todo";
import AddEditTaskPanel from "./components/add-edit-task-panel";
import ProfileBar from "./components/profile-bar";
import CTACard from "./components/card-cta";
import Button from "./components/button";

function App() {
  const [todos, setTodos] = React.useState<Task[]>([]);
  const [toEdit, setToEdit] = React.useState<Task>();
  const [actionType, setActionType] = React.useState<"Add" | "Edit">("Add");

  const handleAddTodo = (title: string) => {
    const lastId: number = todos[todos.length - 1]?.id ?? 1;
    setTodos((curr) => {
      return [...curr, { title, completed: false, id: lastId + 1 }];
    });
  };

  const handleEditTodo = (todoId: number, task: TaksEdit) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id == todoId) {
          return { ...todo, ...task };
        } else {
          return todo;
        }
      });
    });
  };

  const handleDeleteTodo = (todoId?: number) => {
    if (todoId) {
      setTodos((curr) => curr.filter((task) => task.id != todoId));
    }
  };
  const handleReset = () => {
    setActionType("Add");
    setToEdit(undefined);
  };
  return (
    <div className="bg-white overflow-hidden h-screen w-screen grid place-content-center ">
      <div className=" h-[90vh] grid md:grid-cols-[414px,656px] bg-muted ">
        {/* <div className=" bg-destructive h-10 w-10"></div>
        <div className=" bg-warn h-10 w-10"></div> */}
        <div className="relative  [box-shadow:_0px_0px_7px_2px_#00000040] pb-16">
          <ProfileBar name="John" />
          <CTACard />
          <div className="grid gap-4 p-6">
            {todos.map((todo) => {
              return (
                <TodoCard
                  key={todo.id}
                  task={todo}
                  onEdit={(task) => {
                    setToEdit(task);
                    setActionType("Edit");
                  }}
                  onToggleComplete={(task, completed) => handleEditTodo(task.id, { completed: completed })}
                />
              );
            })}
          </div>
          <Button size={"icon"} onClick={handleReset} className="absolute bottom-6 right-6 rounded-full text-4xl">
            +
          </Button>
        </div>
        <AddEditTaskPanel type={actionType} onAdd={handleAddTodo} onEdit={handleEditTodo} task={toEdit} onDelete={handleDeleteTodo} reset={handleReset} />
      </div>
    </div>
  );
}

export default App;
