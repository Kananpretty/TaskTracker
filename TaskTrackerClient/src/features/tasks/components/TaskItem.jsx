import React, { useState } from "react";
import { Trash2, Pencil, ToggleLeft, ToggleRight, Save, X } from "lucide-react";
import { useTasks } from "../hooks/useTasks";

const TaskItem = ({ task }) => {
  const { updateTaskByStatus, updateTaskByDetails, deleteTaskById } =
    useTasks();
  const [toggleUpdateSection, setToggleUpdateSection] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdateStatus = () => {
    updateTaskByStatus(task._id);
  };

  const handleUpdateDetails = () => {
    setToggleUpdateSection(true);
  };

  const saveTaskDetails = () => {
    console.log("Saving details:", title, description);
    updateTaskByDetails(task._id, title, description);
    setToggleUpdateSection(false);
  };

  const cancelTaskDetails = () => {
    console.log("cancelingdetails:", title, description);
    setTitle(task.title);
    setDescription(task.description);
    setToggleUpdateSection(false);
  };

  const handleDeleteTask = () => {
    deleteTaskById(task._id);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div className="flex flex-col w-2/3 gap-1">
        {toggleUpdateSection ? (
          <>
            <input
              autoFocus
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-gray-800 font-medium text-sm border rounded-md px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full text-gray-700 text-sm border rounded-md px-2 py-0.5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        ) : (
          <>
            <div className="text-gray-800 text-sm font-medium">{title}</div>
            <div className="text-gray-700 text-sm">{description}</div>
          </>
        )}
      </div>
      <div className="w-1/3 flex items-center gap-7 justify-end">
        {toggleUpdateSection ? (
          <>
            <button onClick={saveTaskDetails}>
              <Save className="h-5 w-5 text-green-600 hover:text-green-700 cursor-pointer" />
            </button>
            <button onClick={cancelTaskDetails}>
              <X className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </button>
          </>
        ) : (
          <>
            <button onClick={handleUpdateStatus}>
              {task.status ? (
                <ToggleRight className="h-5 w-5 text-green-600 hover:text-green-700 cursor-pointer" />
              ) : (
                <ToggleLeft className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              )}
            </button>
            <button onClick={handleUpdateDetails}>
              <Pencil className="h-5 w-5 text-blue-500 hover:text-blue-600 cursor-pointer" />
            </button>
            <button onClick={handleDeleteTask}>
              <Trash2 className="h-5 w-5 text-red-500 hover:text-red-600 cursor-pointer" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
