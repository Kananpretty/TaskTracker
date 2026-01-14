import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { useTasks } from "../hooks/useTasks";

const TaskForm = () => {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTasks();

  const reset = () => {
    setTitle("");
    setDescription("");
    setExpanded(false);
  };

  const handleSubmit = () => {
    if (!title.trim()) return;

    addTask({
      title,
      description,
    });

    reset();
  };

  /* COLLAPSED STATE */
  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className="bg-white w-full flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 transition border-2 border-gray-200 rounded-b-none"
      >
        <Plus className="w-4 h-4" />
        <span>Add a task…</span>
      </button>
    );
  }

  /* EXPANDED STATE */
  return (
    <div className="rounded-lg p-3 space-y-3 bg-white flex flex-row border border-gray-200 shadow-sm">
      <div className="flex flex-col w-5/6">
        <input
          autoFocus
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-sm text-gray-800 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          className="w-full text-sm text-gray-700 border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex w-1/6 justify-end align-middle gap-2">
        <button
          onClick={handleSubmit}
          disabled={!title.trim()}
          className="px-1.5 py-1.5 w-fit h-fit bg-blue-400 text-white disabled:opacity-40 text-sm font-medium rounded-md hover:bg-blue-700 transition"
          aria-label="Save task"
        >
          <Check className="w-6 h-6" />
        </button>

        <button
          onClick={reset}
          className="px-1.5 py-1.5 w-fit h-fit text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          aria-label="Cancel"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
