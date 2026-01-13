import "./App.css";
import Navbar from "./components/common/Navbar";
import TaskPage from "./features/tasks/TasksPage";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <TaskPage />
      </div>
    </div>
  );
}

export default App;
