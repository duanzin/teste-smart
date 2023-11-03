import { deleteTask, editTask } from "../api/route";

export default function Task({ id, title, description, setTasks }) {
  const handleDelete = async (id) => {
    try {
      const response = await deleteTask(id);
      setTasks(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await editTask(id);
      setTasks(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <button onClick={() => handleUpdate(id)}>Marcar como finalizada</button>
        <button onClick={() => handleDelete(id)}>Excluir</button>
      </div>
    </li>
  );
}
