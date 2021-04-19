import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private webReqService: WebRequestService) { }

  createEmployee(username: string, firstname: string){
    return this.webReqService.post('api/createuser', { username, firstname });
  }

  getEmployee(){
    return this.webReqService.get("api/listuser")
  }
}
