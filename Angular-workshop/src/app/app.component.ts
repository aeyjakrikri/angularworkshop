import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  request = {
    key1:0,
    key2:0
  }
  result:number=null;
  constructor(private service: CommonServiceService) {
 
  }
  getData() {
    this.service.getData(this.request).subscribe((response:any) => {
      this.result = response.result;
    });
  }

}
