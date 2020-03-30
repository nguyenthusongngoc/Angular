import { Component } from '@angular/core';
import { LocalerService } from './share/service/localer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day3';

  resultLocal: object[];
  resultSession: object[];
  inputDecription: string;
  inputcontent: string;
  contentList = [
    {
      id: 1,
      title: 'abc',
      content: 'Cách đây 20 năm, trong một quán cơm kéo rào (quán cơm tù) trên quốc lộ 1A, hành khách trên một chiếc xe hôi hám, nóng nực, xộc xệch và đầy bụi đường vừa qua cửa thì nghe tiếng ken két kéo cửa sắt sau lưng của đám người phục vụ. Một cuộc ẩu đả đã xảy ra và giữa âm thanh hỗn độn đó, giọng một người Bình Định cất lên với vẻ ôn tồn. Người đàn ông này bước ra can ngăn, đó là Mười Hoàng. Những kẻ gây gổ chạm vào người ông thì đều bật ra vì những cú đỡ gạt. Ông không ra đòn, chỉ can ngăn. Đệ tử của Mười Hoàng đi chuyến đó vào Bình Định rước thầy ra mở võ đường càng khâm phục đức tính nhẫn nhịn của sư phụ.'
    }
  ]
  constructor(private localerService: LocalerService) { }

  setLocal(content: string, decription: string, name: string) {
    let newObject = { content: content, decription: decription }
    this.localerService.saveLocalStorage(newObject, name);
    this.inputcontent = '';
    this.inputDecription = '';
  }

  getLocal(name: string) {
    this.resultLocal = this.localerService.getLocalStorage(name);
  }

  setSession(content: string, decription: string, name: string) {
    let newObject = { content: content, decription: decription }
    this.localerService.saveSessionStorage(newObject, name);
    this.inputcontent = '';
    this.inputDecription = '';
  }

  getSession(name: string) {
    this.resultSession = this.localerService.getSessionStorage(name);
  }
}
