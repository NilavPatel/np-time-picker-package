import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'np-time-picker',
  templateUrl: 'np-time-picker.component.html',
  styleUrls: ['np-time-picker.component.css'],
  styles: []
})
export class NpTimePickerComponent implements OnInit {

  _isOpen = false;

  _hours: number[] = [];
  _minutes: number[] = [];
  _seconds: number[] = [];

  _selectedHour: number = 0;
  _selectedMinute: number = 0;
  _selectedSecond: number = 0;
  _selectedAMPM = 'AM';

  @Input() value: string;
  @Input() iconClass: string;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
    for (var i = 0; i <= 12; i++) {
      this._hours.push(i);
    }

    for (var i = 0; i <= 60; i++) {
      this._minutes.push(i);
      this._seconds.push(i);
    }

    if (this.value) {
      this._onChangeTime();
    } else {
      this._setTime();
    }
  }

  _minusHour() {
    this._selectedHour = this._selectedHour == 0 ? 12 : this._selectedHour - 1;
    this._setTime();
  }

  _minusMinute() {
    this._selectedMinute = this._selectedMinute == 0 ? 60 : this._selectedMinute - 1;
    this._setTime();
  }

  _minusSecond() {
    this._selectedSecond = this._selectedSecond == 0 ? 60 : this._selectedSecond - 1;
    this._setTime();
  }

  _addHour() {    
    this._selectedHour = this._selectedHour == 12 ? 0 : this._selectedHour + 1;
    this._setTime();
  }

  _addMinute() {
    this._selectedMinute = this._selectedMinute == 60 ? 0 : this._selectedMinute + 1;
    this._setTime();
  }

  _addSecond() {
    this._selectedSecond = this._selectedSecond == 60 ? 0 : this._selectedSecond + 1;
    this._setTime();
  }

  _changeTime($event, arg) {
    if (arg == "hour") {
      this._selectedHour = parseInt($event.target.value);
    }
    else if (arg == "minute") {
      this._selectedMinute = parseInt($event.target.value);
    }
    else if (arg == "second") {
      this._selectedSecond = parseInt($event.target.value);
    }
    else if (arg == "AMPM") {
      this._selectedAMPM = $event.target.value;
    }
    this._setTime();
  }

  _setTime() {
    this.value = this._selectedHour + ":" + this._selectedMinute + ":" + this._selectedSecond + " " + this._selectedAMPM;
  }

  _toggleTimePicker() {
    this._isOpen = !this._isOpen;
  }

  _close() {
    this._isOpen = false;
  }

  _onChangeTime() {
    var result = this.value.split(" ");
    this._selectedAMPM = result[1] == "am" || result[1] == "AM" ? "AM" : "PM";
    var timeArray = result[0].split(":");
    this._selectedHour = parseInt(timeArray[0]);
    this._selectedMinute = parseInt(timeArray[1]);
    this._selectedSecond = parseInt(timeArray[2]);
    this.onChange.emit(this.value);
  }  
}
