package com.example.Employmanagement.Repo;

import com.example.Employmanagement.Entity.Employ;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployRepo extends MongoRepository<Employ, String> {

}
