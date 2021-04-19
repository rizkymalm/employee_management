import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { EmployeeService } from "../employee.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Homepage';
  opened = false
  employee: any
  
  constructor(private viewportScroller: ViewportScroller, private employeeService: EmployeeService) { }
  toggleSidebar(){
    this.opened = !this.opened
    return this.opened
  }
  getMargin(){
    return this.opened === true ? '300px' : '0%'
  }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe((employee: any[]) => {
      this.employee = employee;
    })
  }

}
