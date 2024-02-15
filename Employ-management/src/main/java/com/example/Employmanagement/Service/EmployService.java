package com.example.Employmanagement.Service;

import com.example.Employmanagement.Entity.Employ;
import com.example.Employmanagement.Repo.EmployRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EmployService {
    @Autowired
    private EmployRepo repo;

    public void saveorUpdate(Employ employs) {

        repo.save(employs);
    }

    public Iterable<Employ> listAll() {

        return this.repo.findAll();
    }


    public void deleteEmploy(String id) {

        repo.deleteById(id);
    }
    public Employ getEmployByID(String employid) {

        return repo.findById(employid).get();
    }
}
