import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'register_form';

  formdata: any = {};
  futureDate: boolean = false;

  submit() {
    console.log(this.formdata);

    let inputDate = new Date(this.formdata.hir_date);
    let currentDate = new Date();
    
    if (inputDate < currentDate) {
      this.futureDate = false;
      console.log('The input date is in the past.');
    } else {
      this.futureDate = true;
      console.log('The input date is in the future.');
    }

  }
}
