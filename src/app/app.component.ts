import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'register_form';

  formdata:any = {};

  submit(){
    console.log(this.formdata);
  }
}
