import React from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../hooks/useTasks";

const TaskList = () => {
  const { tasks, isLoading } = useTasks();

  if (isLoading) return <p>Loading tasks...</p>;

  return (
    <div className="bg-white flex flex-col gap-2 border-2 border-gray-200 rounded-lg border-t-0 rounded-t-none p-2">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
