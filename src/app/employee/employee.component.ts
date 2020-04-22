import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(){
    this.http.get('http://localhost:23100/api/employee').subscribe(response=> {
    this.employees=response;
  }, error => {
  console.log(error);
  })
  }
}
