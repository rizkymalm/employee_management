import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Homepage';
  opened = false
  
  constructor(private viewportScroller: ViewportScroller) { }
  toggleSidebar(){
    this.opened = !this.opened
    return this.opened
  }
  getMargin(){
    return this.opened === true ? '300px' : '0%'
  }

  ngOnInit(): void {
  }

}
