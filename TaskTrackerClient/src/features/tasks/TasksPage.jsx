import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TasksProvider } from "./contexts/TasksProvider";

const TaskPage = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <TasksProvider>
        <TaskForm />
        <TaskList />
      </TasksProvider>
    </div>
  );
};

export default TaskPage;
