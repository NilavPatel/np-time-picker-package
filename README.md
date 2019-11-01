# np-ui-time-picker

<img src="https://raw.githubusercontent.com/NilavPatel/np-ui-data-grid-package/master/src/assets/images/logo-large.png" width="300" height="80">

````
Angular 8 time-picker component
````

### [Demo](https://stackblitz.com/edit/np-ui-time-picker)

````
npm i np-ui-time-picker
````

````
<np-time-picker [(value)]="timePicker"></np-time-picker>
````

# properties
````
1.  value
    string value for time. in hh:mm:ss tt format

2.  disabled
    true/false - set component disabled

3.  defaultOpen
    true/false
    default open or not.

4.  is24Hours: boolean
    if set to true, display 24 hours format for time.
    default it is set to false.
    Return type will be 12 hours format always.
````

# methods
````
1.  onChange( newValue : string)
    value change event, fired when time value is changed.
    in parameter new value will be parsed.
````

# Apis
````
1.  get24hrsTimeFormat()
    return 24 hrs formatted time value

2.  get12hrsTimeFormat()
    return 12 hrs formatted time value
````