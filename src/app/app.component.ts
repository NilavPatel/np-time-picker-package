import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'np-ui-time-picker-package';

  timePicker1: string = "10:0:0 AM";
  timePicker2: string = "10:0:0";
  timePicker3: string = "10:0:0 AM";
  timePicker4: string;
  timePicker5: string;
  timePicker5Disable = false;
  timePicker5Required = false;
  timePicker6: string;
  timePicker71: string;
  timePicker72: string;
  timePicker8: string;
  timePicker9: string;
  timePicker10: string;

  onChange(value: string) {
    alert("time changed " + value);
  }
}
