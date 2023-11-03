import { useState, useEffect } from "react";
import TaskForm from "./components/form";
import TaskSection from "./components/section";
import AccountForm from "./components/user";
import { getTasks } from "./api/route";

function App() {
  const [tasks, setTasks] = useState([]);
  const [userId, setUserId] = useState(null);

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
    <>
      {userId === null ? (
        <AccountForm setUserId={setUserId} />
      ) : (
        <main>
          <TaskForm setTasks={setTasks} userId={userId} />
          {tasks.some((data) => data.status === "pendente") && (
            <TaskSection
              name="Pendentes"
              tasks={tasks.filter((data) => data.status === "pendente")}
              setTasks={setTasks}
            />
          )}
          {tasks.some((data) => data.status === "finalizada") && (
            <TaskSection
              name="Finalizadas"
              notes={tasks.filter((data) => data.status === "finalizada")}
              setTasks={setTasks}
            />
          )}
        </main>
      )}
    </>
  );
}

export default App;

