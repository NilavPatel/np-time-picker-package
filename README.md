# np-ui-time-picker

<img src="https://raw.githubusercontent.com/NilavPatel/np-ui-data-grid-package/master/src/assets/images/logo-large.png" width="300" height="80">

````
Angular 8 time-picker component
````

## [Demo](https://stackblitz.com/edit/np-ui-time-picker)

````
npm i np-ui-time-picker
````

### HTML
````
<np-time-picker [(value)]="timePicker"></np-time-picker>
````

### Properties
````
1.  value : string
    Two way data binding    
    return value depends on time format, 
    if 12 hrs then hh:mm:ss tt,
    or if 24 hrs then HH:mm:ss.

2.  disabled : boolean
    true/false - set component disabled

3.  defaultOpen : boolean
    Set time picker default open or close.

4.  is24Hours: boolean
    if set to true, display 24 hours format for time.
    default value is false.    
````

### Apis
````
1.  get24hrsTimeFormat()
    return 24 hrs formatted time value

2.  get12hrsTimeFormat()
    return 12 hrs formatted time value
````

### Methods
````
1.  onChange( newValue : string)
    value change event, fired when time value is changed.
    in parameter new value will be parsed.
````
