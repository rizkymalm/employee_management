import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { EmployeeService } from "../employee.service";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Create Employee';
  opened = false
  
  constructor(private viewportScroller: ViewportScroller, private employeeService: EmployeeService) { }
  toggleSidebar(){
    this.opened = !this.opened
    return this.opened
  }
  getMargin(){
    return this.opened === true ? '300px' : '0%'
  }
  createEmployee(username: string, firstname: string){
    this.employeeService.createEmployee(username, firstname).subscribe((response: any) =>{
      console.log(response)
    })
  }

  ngOnInit(): void {
  }

}
