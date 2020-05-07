import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from '../subject';
import { Observable } from 'rxjs';
import { SubjectService } from '../subject.service';
import { SessionServiceService } from '../session-service.service';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-teacher-data',
  templateUrl: './teacher-data.component.html',
  styleUrls: ['./teacher-data.component.css']
})
export class TeacherDataComponent implements OnInit {

  @ViewChild('multiSelect') multiSelect;
  public form: FormGroup;
  public loadContent: boolean = false;
  public name = 'Cricketers';
  public SubjectAvailable : Subject[]=[];
  public settings = {};
  public selectedItems = [];
  public isdisabled=false;
  a1:String=""
  Subjectselected:Subject=new Subject;
  allsubcount=0;
  i=0;
  addResponse:Object;
  l:Number;
  constructor(private subjectService:SubjectService,private route:Router) { }

  ngOnInit(): void {
    console.log(sessionStorage.length);
    if(sessionStorage.getItem('user-id')===null){
      alert("Please login to access")
      this.route.navigate(['../register-user']);
    }
    else{
      
      // setting and support i18n
      this.settings = {
        singleSelection: false,
        idField: 'subjectId',
        textField: 'subjectName',
        enableCheckAll: true,
        selectAllText: 'Select All',
        unSelectAllText: 'Unselect All',
        allowSearchFilter: false,
        limitSelection: -1,
        clearSearchFilter: true,
        maxHeight: 197,
        itemsShowLimit: 3,
        searchPlaceholderText: 'Tìm kiếm',
        noDataAvailablePlaceholderText: 'No data',
        closeDropDownOnSelection: false,
        showSelectedItemsAtTop: true,
        defaultOpen: false,
        isdisabled:false
      };
      this.form = new FormGroup({
        name: new FormControl(this.selectedItems)
      });
      this.loadContent = true;
    }
  }

  get f() { return this.form.controls; }

  public save() {
    console.log(this.form.value);
  }


  public onItemSelect(item: Subject) {
    item.classStd=this.a1;
    item.optionalSubject="Yes";
    this.selectedItems.push(item);
  }
  public onDeSelect(item: Subject) {
    item.classStd=this.a1;
    item.optionalSubject="Yes";
    this.selectedItems.splice(this.selectedItems.indexOf(item),1);
  }

  public onSelectAll(items: any) {
    items.forEach(Subject => {
      Subject.classStd=this.a1;
      this.selectedItems.push(Subject);
    });
    console.log(this.selectedItems);
  }
  public onDeSelectAll(items: any) {
    items.forEach(subject => {
      subject.classStd=this.a1;
      this.selectedItems.splice(this.selectedItems.indexOf(subject),1);
    });
  }


  onChange(classValue) {
    this.subjectService.listSubject(classValue).subscribe(
      (data)=>
      {
        data;
        this.SubjectAvailable=data;
      }
    )
  }

  subjectSubmit(){
    var j=this.selectedItems.length;
    if(j>3){
      var threeconfirm=confirm("Only first 3 subjects will be only submitted ");
      if(threeconfirm){
        for(var k=3;k<j;k++){
          this.selectedItems.pop();
        }
      }
    }
    else{
      this.subjectService.submitTSubjects(this.selectedItems).
      subscribe(
        (data)=>
          {
            data;
            this.addResponse=data;
            alert(this.addResponse);
          }
        )
    }
  }
}
