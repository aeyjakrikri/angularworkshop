import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList = [{
    pId : "0001",
    pName :"แปลงสีฟัน",
    pCost:30,
    img : "https://www.ningnongmistine.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/3/8/38008.jpg"
  },{
    pId : "0002",
    pName :"แก้วน้ำ",
    pCost:10,
    img : "../assets/img/img1.jpg"
  },{
    pId : "0003",
    pName :"ยาสีฟัน",
    pCost:20,
    img : "../assets/img/img2.jpg"
  }];

  selectedProduct :any;

  selectProduct(p){
  this.selectedProduct = p; 
  }
  constructor() {
    
  }

}
