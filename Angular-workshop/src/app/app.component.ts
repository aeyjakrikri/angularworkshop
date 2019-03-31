import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  object = {};

  request = {
    key1: 10,
    key2: 20
  }

  result: number = null;
  constructor(private service: CommonServiceService) {
    this.getData()
    this.getUserDetail();
  }/*
    Request
* id : "5721602287"
* noteId : 1
* name : "new name"
* */
//เริ่ม-สร้างใหม่
  errorMsg="";
  updateNoteName(){
      let request = {
        id : this.userDetail.id,
        noteId : Number(this.editNoteDetail.note_id),
        name :this.editNoteDetail.name
      }
     this.service.updateNoteName(request).subscribe((response: any) => {
      if(response.success){
        this.errorMsg = "แก้ไขสำเร็จ"
        this.getUserDetail();
      }else{
        this.errorMsg = "แก้ไขไม่สำเร็จ"
      }
      setTimeout(()=>{
        this.errorMsg = ''
      },2000)
    });
  }
  //จบ-สร้างใหม่
  editNoteDetail: any = {
    note_id: "",
    name: ""
  };
  editNote(note) { 
    console.log(note);
    this.editNoteDetail = JSON.parse(
      JSON.stringify(note))
  }
  getData() {
    this.service.getData(this.request).subscribe((response: any) => {
      console.log(response);
      this.result = response.sum;
    });
  }

  userDetail: any = {
    id: "",
    name: ""
  }
  noteDetail: any = [];
  studentId = "5721602287";
  getUserDetail() {
    let request = {
      id: this.studentId
    }
    this.service.getUserDetail(request).subscribe((response: any) => {
      console.log(response);
      this.userDetail = response.user[0]
      this.noteDetail = response.noteDetail[0].note_type;
    });
  }
  
  listDetail: any = [];
  selectNote(list) {
    this.listDetail = JSON.parse(
      JSON.stringify(list))
  }



}
