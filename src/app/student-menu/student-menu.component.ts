import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.css']
})
export class StudentMenuComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  selectedSubject:Subject[]=[];

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  constructor(private breakpointObserver: BreakpointObserver,private subjectService:SubjectService) {}

  ngOnInit():void{
    this.loadData();
  }
  
  loadData(){
    this.subjectService.showSubjects().subscribe(
      (data)=>
      {
        data;
        this.selectedSubject=data;
      }
    )
  }

}
