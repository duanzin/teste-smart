package com.example.testeSmartapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.testeSmartapi.model.TaskModel;

@Repository
public interface TaskRepository extends JpaRepository<TaskModel,Long> {
    
}
