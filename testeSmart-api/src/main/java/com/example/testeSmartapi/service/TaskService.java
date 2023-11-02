package com.example.testeSmartapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.example.testeSmartapi.model.TaskModel;
import com.example.testeSmartapi.repository.TaskRepository;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public TaskModel createTask(TaskModel task) {
        return taskRepository.save(task);
    }

    // Get all tasks
    public List<TaskModel> getAllTasks() {
        return taskRepository.findAll();
    }

    // Get a specific task by ID
    public Optional<TaskModel> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    // Update a task
    public TaskModel updateTask(Long id, TaskModel updatedTask) {
        // Check if the task with the given ID exists
        if (taskRepository.existsById(id)) {
            // Set the ID of the updatedTask to the existing task's ID
            updatedTask.setId(id);
            return taskRepository.save(updatedTask);
        } else {
            // Task with the given ID does not exist
            return null;
        }
    }

    // Delete a task by ID
    public boolean deleteTask(Long id) {
        // Check if the task with the given ID exists
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
            return true; // Deletion successful
        } else {
            return false; // Task with the given ID does not exist
        }
    }
}
