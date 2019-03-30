import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-workshop';
  score: number = 49;
  name: string = "นาย ก นามสกุล ข";

  student:any = {
    studentId: "5721602287",
    name: "Peter",
    weight: 57,
    height: 175
  }

  studentList = [{
    studentId: "5721602287",
    name: "Peter",
    weight: 57,
    height: 175
  }, {
    studentId: "5721601111",
    name: "Marry",
    weight: 45,
    height: 175
  }, {
    studentId: "5721602222",
    name: "Jany",
    weight: 55,
    height: 165
  }, {
    studentId: "5721602299",
    name: "Jam",
    weight: 55,
    height: 165
  }];

  constructor() {
    this.student.bmi = (this.student.weight/
      ((this.student.height/100)*(this.student.height/100))).toFixed(2);


      
      this.studentList.map((object,index)=>{
        let obj:any = object;
        obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2);
        return obj;
      })
    // this.studentList.map((object,index)=>{
    //   let obj:any = object;
    //   obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2);
    //     return obj;
    // });
    console.log(this.studentList);
    
  }

}
