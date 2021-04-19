import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private webReqService: WebRequestService) { }

  createList(fullname: string){
    this.webReqService.post('api/listuser', { fullname });
  }

  getEmployee(){
    return this.webReqService.get("api/listuser")
  }
}
