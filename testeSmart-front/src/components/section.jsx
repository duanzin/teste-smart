import Task from "./task";

export default function TaskSection({ name, tasks, setTasks }) {
  return (
    <section>
      <h2>{name}</h2>
      <ul>
        {tasks.map((data) => (
          <Task
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </section>
  );
}
