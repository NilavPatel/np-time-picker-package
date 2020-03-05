import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'np-ui-time-picker-package';

  timePicker: string ;
  timePicker2: string = "10:0:0";
  timePicker3: string;
  timePicker4: string;
  timePicker5: string;
  timePicker6: string;
  timePicker7: string;
  timePicker8: string;

  isDisable: boolean = true;

  setTime() {
    this.timePicker3 = "10:00:00 PM";
  }

  onChange(value: string) {
    alert("time changed " + value);
  }
}
