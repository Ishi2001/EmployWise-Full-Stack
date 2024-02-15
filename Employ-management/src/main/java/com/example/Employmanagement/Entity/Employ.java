package com.example.Employmanagement.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection ="employs")
public class Employ {

    @Id
    private String _id;
    private String employname;
    private String email;
    private String mobile;
    private String reportto;


    public Employ(String _id, String employname, String email, String mobile, String reportto) {
        this._id = _id;
        this.employname = employname;
        this.email = email;
        this.mobile = mobile;
        this.reportto = reportto;
    }


    public Employ() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getEmployname() {
        return employname;
    }

    public void setEmployname(String employname) {
        this.employname = employname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getReportto() {
        return reportto;
    }

    public void setReportto(String reportto) {
        this.reportto = reportto;
    }
    @Override
    public String toString() {
        return "Employ{" +
                "_id='" + _id + '\'' +
                ", employname='" + employname + '\'' +
                ", email='" + email + '\'' +
                ", mobile='" + mobile + '\'' +
                ", reportto='" +reportto + '\'' +
                '}';
    }
}
