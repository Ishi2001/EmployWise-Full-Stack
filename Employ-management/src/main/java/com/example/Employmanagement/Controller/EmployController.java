package com.example.Employmanagement.Controller;

import com.example.Employmanagement.Entity.Employ;
import com.example.Employmanagement.Service.EmployService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/employ")
public class EmployController  {

    @Autowired
    private EmployService employService;

    @PostMapping(value = "/save")
    private String saveEmploy(@RequestBody Employ employs) {

        employService.saveorUpdate(employs);
        return employs.get_id();
    }

    @GetMapping(value = "/getall")
    public Iterable<Employ> getEmploys() {
        return employService.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private Employ update(@RequestBody Employ employ, @PathVariable(name = "id") String _id) {
        employ.set_id(_id);
        employService.saveorUpdate(employ);
        return employ;
    }
    @DeleteMapping("/delete/{id}")
    private void deleteEmploy(@PathVariable("id") String _id) {
        employService.deleteEmploy(_id);
    }


    @RequestMapping("/search/{id}")
    private Employ getEmployes(@PathVariable(name = "id") String employid) {
        return employService.getEmployByID(employid);
    }


}
