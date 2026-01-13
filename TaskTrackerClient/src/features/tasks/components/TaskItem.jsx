import React from "react";
import { Trash2, CheckCircle2 } from "lucide-react";

const TaskItem = ({ task }) => {
  const { title, description } = task;
  const handleUpdate = () => {
    console.log("Update clicked for task:", task);
  };
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col w-2/3 ">
        <div className="text-gray-800 font-medium">{title}</div>
        <div className="text-gray-600 ">{description}</div>
      </div>
      <div className="w-1/3 flex items-center gap-10 justify-end">
        <button
          onClick={handleUpdate}
          className="p-2 rounded-full text-green-500 font-medium hover:text-green-800  transition"
        >
          <CheckCircle2 />
        </button>
        <button className="p-2 rounded-full text-red-500 font-medium hover:text-red-800  transition">
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
