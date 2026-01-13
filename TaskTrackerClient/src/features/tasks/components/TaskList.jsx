import React from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../hooks/useTasks";

const TaskList = () => {
  const { tasks, isLoading } = useTasks();

  if (isLoading) return <p>Loading tasks...</p>;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
