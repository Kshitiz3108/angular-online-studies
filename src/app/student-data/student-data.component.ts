import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from '../subject';
import { Observable } from 'rxjs';
import { SubjectService } from '../subject.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SessionServiceService } from '../session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

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
  constructor(private subjectService:SubjectService,private fb: FormBuilder,private route:Router) { }

  ngOnInit(): void {
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

  onChange(classValu) {
    this.allsubcount=0;
    this.isdisabled=false;
    this.selectedItems=[];
    this.subjectService.listSubject(classValu).
    subscribe(
      (data)=>
      {
        data;
        this.SubjectAvailable=data;
        this.allsubcount=this.SubjectAvailable.length;
        for(let subject of this.SubjectAvailable){
          if(subject.optionalSubject==="No"){
            this.selectedItems.push(subject);
          }
        }
        this.SubjectAvailable=this.SubjectAvailable.filter(Subject=>Subject.optionalSubject!="No")
         if(this.allsubcount==this.selectedItems.length){
          this.isdisabled=true; 
        }
      }
    )    
  }

  public subjectSubmit(){
    var l=this.selectedItems.length
    if(l<1){
      alert("Select at least one subject in order to submit")
    }
    else{
      this.subjectService.submitSSubjects(this.selectedItems).subscribe(
        (data)=>
        {
          this.addResponse=data;
          alert(this.addResponse);
        }
      )
    }
  }
}
