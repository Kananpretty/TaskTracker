// hooks/useTasks.js
import { useState, useEffect, useCallback } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTaskStatus,
  updateTaskDetails,
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
    try {
      const newTask = await createTask(title, description);
      setTasks((prev) => [newTask, ...prev]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update task status
  const updateTaskByStatus = async (id) => {
    try {
      const updated = await updateTaskStatus(id);
      setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      setError(err.message);
    }
  };

  const updateTaskByDetails = async (id, title, description) => {
    try {
      const updated = await updateTaskDetails(id, title, description);
      setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a task
  const deleteTaskById = async (id) => {
    console.log("Attempting to delete ID:", id);
    console.log(
      "Sample Task from state:",
      tasks.find((t) => t._id === id)
    );
    try {
      const deletedTask = await deleteTask(id);
      setTasks((prev) => {
        const updated = prev.filter((t) => t._id !== deletedTask._id);
        console.log("Tasks after filter:", updated.length);
        return updated;
      });
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
        updateTaskByStatus,
        updateTaskByDetails,
        deleteTaskById,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
