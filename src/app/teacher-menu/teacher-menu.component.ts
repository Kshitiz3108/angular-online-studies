import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from '../subject';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-teacher-menu',
  templateUrl: './teacher-menu.component.html',
  styleUrls: ['./teacher-menu.component.css']
})
export class TeacherMenuComponent implements OnInit {

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
