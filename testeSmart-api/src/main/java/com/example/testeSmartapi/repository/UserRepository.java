package com.example.testeSmartapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.testeSmartapi.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long>{
    
}
