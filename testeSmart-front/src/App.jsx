import { useState, useEffect } from "react";
import TaskForm from "./components/form";
import TaskSection from "./components/section";
import { getTasks } from "./api/route";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await getTasks();
        setTasks(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTasks();
  }, []);

  return (
      <main>
        <TaskForm setTasks={setTasks} />
        {tasks.some((data) => data.favorite) && (
          <TaskSection
            name="Pendentes"
            tasks={tasks.filter((data) => data.status)}
            setTasks={setTasks}
          />
        )}
        {tasks.some((data) => !data.favorite) && (
          <TaskSection
            name="Finalizadas"
            notes={tasks.filter((data) => !data.status)}
            setTasks={setTasks}
          />
        )}
      </main>
  );
}

export default App;
