import { useState } from "react";
import { deleteTask, editTask } from "../api/route";

export default function Task({ id, title, description, setTasks }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [isEditing, setIsEditing] = useState(false);
  const iconStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: favorite ? "#FFAC1C" : "inherit",
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteTask(id);
      setTasks(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleUpdateSubmit = async (title, description, id) => {
    if (newTitle.trim() && newDescription.trim()) {
      try {
        const response = await editTask({ title, description }, id);
        setTasks(response);
      } catch (error) {
        console.error(error);
      }
    }
    setIsEditing(false);
  };

  return (
    <li>
      <h3>
        {isEditing ? (
          <input
            type="text"
            id="title"
            name="title"
            maxLength={225}
            value={newTitle}
            onChange={handleTitleChange}
            placeholder="Título"
            autoComplete="off"
          />
        ) : (
          title
        )}
      </h3>
      <p>
        {isEditing ? (
          <textarea
            id="description"
            name="description"
            maxLength={255}
            value={newDescription}
            onChange={handleDescriptionChange}
            placeholder="Criar Tarefa..."
            autoComplete="off"
          />
        ) : (
          text
        )}
      </p>
      <div>
        <button onClick={handleEditClick}>Editar</button>
        {isEditing ? (
          <button
            style={{ ...iconStyle, color: "inherit" }}
            onClick={() => handleUpdateSubmit(newTitle, newText, id)}
          />
        ) : (
          <>
            <button>Marcar como concluida</button>
            <button onClick={() => handleDelete(id)}>Excluir</button>
          </>
        )}
      </div>
    </li>
  );
}
