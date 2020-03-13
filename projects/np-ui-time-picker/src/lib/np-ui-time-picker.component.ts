import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, HostListener, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, ViewChild } from '@angular/core';

@Component({
  selector: 'np-ui-time-picker',
  templateUrl: 'np-ui-time-picker.component.html',
  styleUrls: ['np-ui-time-picker.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiTimePickerComponent implements OnInit {

  _hours: number[] = [];
  _minutes: number[] = [];
  _seconds: number[] = [];

  _isOpen = false;

  _selectedHour: number = 0;
  _selectedMinute: number = 0;
  _selectedSecond: number = 0;
  _selectedAMPM = 'AM';

  _value: string;

  _pattern: any;
  @Input() value: string;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @Input() defaultOpen: boolean = false;
  @Input() disabled: boolean = false;
  @Input() is24Hours: boolean = false;
  @Input() isOkButton: boolean = true;
  @Input() isNowButton: boolean = false;
  @Input() hideSeconds: boolean = false;

  @Input() placeholder: string = "";
  @Input() required: boolean = false;
  @Input() name: string = "";

  @ViewChild('timepickerinput') input: ElementRef;

  constructor(private elRef: ElementRef) {
    this._pattern = new RegExp("^(([0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}) ([AaPp][Mm]))$");
    for (var i = 0; i < 12; i++) {
      this._hours.push(i);
    }
    for (var i = 0; i < 60; i++) {
      this._minutes.push(i);
      this._seconds.push(i);
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutSide(event: any) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this._close();
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.is24Hours) {
      this._hours = [];
      if (changes.is24Hours.currentValue == true) {
        this._pattern = new RegExp("^([0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2})$");
        for (var i = 0; i < 24; i++) {
          this._hours.push(i);
        }
      } else {
        this._pattern = new RegExp("^(([0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}) ([AaPp][Mm]))$");
        for (var i = 0; i < 12; i++) {
          this._hours.push(i);
        }
      }
    }
    if (changes.value != undefined && changes.value.currentValue != this._value) {
      if (changes.value.currentValue == undefined || changes.value.currentValue == null || !this._pattern.test(changes.value.currentValue)) {
        this._value = null;
        this.value = null;
        this.valueChange.emit(this.value);
        return;
      }
      this._value = changes.value.currentValue;
      this._extractValues();
    }
  }

  _minusHour() {
    this._selectedHour = this._selectedHour == 0 ? (this.is24Hours ? 23 : 11) : this._selectedHour - 1;
    this._setValue();
  }

  _minusMinute() {
    this._selectedMinute = this._selectedMinute == 0 ? 59 : this._selectedMinute - 1;
    if (this._selectedMinute == 59) {
      this._selectedHour = this._selectedHour == 0 ? (this.is24Hours ? 23 : 11) : this._selectedHour - 1;
    }
    this._setValue();
  }

  _minusSecond() {
    this._selectedSecond = this._selectedSecond == 0 ? 59 : this._selectedSecond - 1;
    if (this._selectedSecond == 59) {
      this._selectedMinute = this._selectedMinute == 0 ? 59 : this._selectedMinute - 1;
      if (this._selectedMinute == 59) {
        this._selectedHour = this._selectedHour == 0 ? (this.is24Hours ? 23 : 11) : this._selectedHour - 1;
      }
    }
    this._setValue();
  }

  _addHour() {
    if (this._selectedHour > (this.is24Hours ? 23 : 11)) {
      this._selectedHour = (this.is24Hours ? 23 : 11);
    }
    this._selectedHour = this._selectedHour == (this.is24Hours ? 23 : 11) ? 0 : this._selectedHour + 1;
    this._setValue();
  }

  _addMinute() {
    if (this._selectedMinute > 59) {
      this._selectedMinute = 59;
    }
    this._selectedMinute = this._selectedMinute == 59 ? 0 : this._selectedMinute + 1;
    if (this._selectedMinute == 0) {
      this._selectedHour = this._selectedHour == (this.is24Hours ? 23 : 11) ? 0 : this._selectedHour + 1;
    }
    this._setValue();
  }

  _addSecond() {
    if (this._selectedSecond > 59) {
      this._selectedSecond = 59;
    }
    this._selectedSecond = this._selectedSecond == 59 ? 0 : this._selectedSecond + 1;
    if (this._selectedSecond == 0) {
      this._selectedMinute = this._selectedMinute == 59 ? 0 : this._selectedMinute + 1;
      if (this._selectedMinute == 0) {
        this._selectedHour = this._selectedHour == (this.is24Hours ? 23 : 11) ? 0 : this._selectedHour + 1;
      }
    }
    this._setValue();
  }

  _changeTime($event: any, arg: string) {
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
    this._setValue();
  }

  _setValue() {
    if (this.is24Hours) {
      this._value = this._selectedHour + ":" + this._selectedMinute + ":" + (this.hideSeconds ? 0 : this._selectedSecond);
    } else {
      this._value = this._selectedHour + ":" + this._selectedMinute + ":" + (this.hideSeconds ? 0 : this._selectedSecond) + " " + this._selectedAMPM;
    }
    this.value = this._value;
    this.valueChange.emit(this._value);
    this.onChange.emit(this._value);
  }

  private timeConvert12to24(time: string) {
    var PM: boolean = time.match('PM') ? true : false;
    var timeArray: string[] = time.split(':');
    var min: string = timeArray[1];
    var hour: string;
    var sec: string;
    if (PM) {
      hour = (12 + parseInt(timeArray[0], 10)).toString();
      sec = timeArray[2].replace('PM', '');
    } else {
      hour = timeArray[0];
      sec = timeArray[2].replace('AM', '');
    }
    return hour + ':' + min + ':' + sec;
  }

  private timeConvert24to12(time: string) {
    var values = time.split(":");
    var hour24 = parseInt(values[0]);
    var hour12 = hour24 % 12 || 12;
    var ampm = (hour24 < 12 || hour24 === 24) ? "AM" : "PM";
    return hour12 + ":" + values[1] + ":" + values[2] + " " + ampm;
  }

  _toggleTimePicker() {
    if (this.defaultOpen || this.disabled) {
      return;
    }
    this._isOpen = !this._isOpen;
    if (this._isOpen) {
      this.input.nativeElement.focus();
    }
  }

  _close() {
    if (this.defaultOpen == true) {
      return;
    }
    this._isOpen = false;
  }

  _onInputChange() {
    if (this._value == undefined || this._value == null || !this._pattern.test(this._value)) {
      this._value = null;
      this.value = null;
      this.valueChange.emit(this.value);
      this.onChange.emit(this.value);
      return;
    }
    this._extractValues();
    this.value = this._value;
    this.valueChange.emit(this._value);
    this.onChange.emit(this._value);
  }

  _extractValues() {
    if (this._value == undefined || this._value == null || !this._pattern.test(this._value)) {
      return;
    }
    if (this.is24Hours == true) {
      var result24 = this.timeConvert12to24(this._value);
      var timeArray = result24.split(":");
      this._selectedHour = parseInt(timeArray[0]);
      this._selectedMinute = parseInt(timeArray[1]);
      this._selectedSecond = parseInt(timeArray[2]);
    } else {
      var result = this._value.split(" ");
      this._selectedAMPM = result[1] == "am" || result[1] == "AM" ? "AM" : "PM";
      var timeArray = result[0].split(":");
      this._selectedHour = parseInt(timeArray[0]);
      this._selectedMinute = parseInt(timeArray[1]);
      this._selectedSecond = parseInt(timeArray[2]);
    }

    var isChanged = false;
    if (this._selectedHour > (this.is24Hours ? 23 : 11)) {
      isChanged = true;
      this._selectedHour = (this.is24Hours ? 23 : 11);
    }
    if (this._selectedMinute > 59) {
      isChanged = true;
      this._selectedMinute = 59;
    }
    if (this._selectedSecond > 59) {
      isChanged = true;
      this._selectedSecond = 59;
    }
    if (isChanged) {
      this._setValue();
    }
  }

  _selectNowTime() {
    var today = new Date();
    var nowTime = today.getHours() + ":" + today.getMinutes() + ":" + (this.hideSeconds ? 0 : today.getSeconds());
    if (!this.is24Hours) {
      nowTime = this.timeConvert24to12(nowTime);
    }
    this._value = nowTime;
    this._extractValues();
    this.onChange.emit(this._value);
    this._isOpen = false;
  }

  get24hrsTimeFormat() {
    if (this.is24Hours) {
      return this.value;
    }
    return this.timeConvert12to24(this.value);
  }

  get12hrsTimeFormat() {
    if (this.is24Hours) {
      return this.timeConvert24to12(this.value);
    }
    return this.value;
  }
}
