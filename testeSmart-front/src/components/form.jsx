import React, { useState } from "react";
import { createTask } from "../api/route";

export default function TaskForm({ setTasks }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedTitle = formData.title.trim();
    const trimmedDescription = formData.description.trim();
    if (!trimmedTitle || !trimmedDescription) {
      alert("Escreva algo que não seja só espaços!");
    } else {
      try {
        const newTask = {
          ...formData,
          title: trimmedTitle,
          description: trimmedDescription,
        };
        const response = await createTask(newTask);
        console.log(response);
        setTasks(response);
      } catch (error) {
        console.error(error);
      }
    }
    setFormData({
      title: "",
      description: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        name="title"
        maxLength={225}
        value={formData.title}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Título"
        required
      />
      <textarea
        id="description"
        name="description"
        maxLength={225}
        value={formData.description}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Criar tarefa..."
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
