package com.example.testeSmartapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.example.testeSmartapi.model.TaskModel;
import com.example.testeSmartapi.repository.TaskRepository;
import com.example.testeSmartapi.utils.utils;

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

    public List<TaskModel> getAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<TaskModel> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public TaskModel updateTask(TaskModel newTask, Long id) {
        var oldTask = taskRepository.findById(id).orElse(null);
        if (oldTask == null) {
            return null;
        }
        utils.copyNonNullProperties(newTask, oldTask);
        return taskRepository.save(newTask);
    }

    public boolean deleteTask(Long id) {
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
