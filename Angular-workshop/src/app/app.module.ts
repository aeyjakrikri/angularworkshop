import { BrowserModule,/*เพิ่มใหม่*/TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// เพิ่มใหม่
import { HttpClientModule } from "@angular/common/http";
import { TransferHttpService } from "@gorniv/ngx-transfer-http";
import { CommonServiceService } from './common-service.service';
// เพิ่มใหม่
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TransferHttpService, TransferState, CommonServiceService], //เพิ่มใหม่
  bootstrap: [AppComponent]
})
export class AppModule { }
