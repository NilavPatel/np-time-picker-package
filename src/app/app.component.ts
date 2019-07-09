import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timePicker: string;
  timePicker2: string = "10:25:55 AM";
  timePicker3: string;
  timePicker4: string;
  title = 'np-time-picker-package';

  setTime() {
    this.timePicker3 = "10:00:00 PM";
  }

  onChange(value: string) {
    alert("time changed " + value);
  }
}
