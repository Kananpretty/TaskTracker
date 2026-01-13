// hooks/useTasks.js
import { useState, useEffect, useCallback } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

import { TasksContext } from "./TasksContext";

// 2️⃣ Provider component
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all tasks
  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add a new task
  const addTask = async ({ title, description }) => {
    if (!title.trim()) return;
    console.log(title, description);
    try {
      const newTask = await createTask(title, description);
      setTasks((prev) => [newTask, ...prev]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update task status
  const updateTaskById = async ({ id, status }) => {
    try {
      const updated = await updateTask(id, { status });
      setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a task
  const deleteTaskById = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch tasks once on mount
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loading,
        error,
        fetchTasks,
        addTask,
        updateTaskById,
        deleteTaskById,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
