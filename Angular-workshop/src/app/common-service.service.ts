import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http'; //เพิ่มใหม่

@Injectable({
  providedIn: 'root'
})

export class CommonServiceService {
  private port = '3001';
  private rootPath = 'http://localhost:' + this.port;
  private getDataPath = this.rootPath + '/test/getData';
  private postDataPath = this.rootPath
    + '/test/postData';

  private getUserDetailPath = this.rootPath
    + '/user/getDetail';

  //สร้างใหม่
  private updateNotePath = this.rootPath
    + '/user/updateNoteName';
  //สร้างใหม่

  parameter: any = {
    params: {},
    responseType: "json"
  }
  constructor(
    private http: TransferHttpService,
  ) { }
  //สร้างใหม่
  updateNoteName(body) {
    return this.http.post(this.updateNotePath, body);
  }
  //สร้างใหม่

  getUserDetail(param) {
    this.parameter.params = param;
    return this.http
      .get(this.getUserDetailPath, this.parameter);
  }
  getData(param) {
    this.parameter.params = param;
    return this.http.get(this.getDataPath, this.parameter);
  }
  postData(body) {
    return this.http.post(this.postDataPath, body);
  }

}
