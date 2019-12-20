# np-ui-time-picker

<img src="https://raw.githubusercontent.com/NilavPatel/np-ui-data-grid-package/master/src/assets/images/logo-large.png" width="300" height="80">

````
Time picker for Angular 8 and 8+
````

## [Demo](https://stackblitz.com/edit/np-ui-time-picker)

## NPM
````
npm i np-ui-time-picker
````

## HTML
````
<np-ui-time-picker [(value)]="timePicker"></np-ui-time-picker>
````

## Properties
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

5.  isOkButton : boolean
    If set to true then Ok button will be visible, and color picker will be only closed on click of Ok button. 
    It's default value is false.  
````

## Apis
````
1.  get24hrsTimeFormat()
    return 24 hrs formatted time value

2.  get12hrsTimeFormat()
    return 12 hrs formatted time value
````

## Methods
````
1.  onChange( newValue : string)
    value change event, fired when time value is changed.
    in parameter new value will be parsed.
````

## All np-ui packages for Angular
1. [Data grid](https://www.npmjs.com/package/np-ui-data-grid)
2. [Date picker](https://www.npmjs.com/package/np-ui-date-picker)
3. [Time picker](https://www.npmjs.com/package/np-ui-time-picker)
4. [Color picker](https://www.npmjs.com/package/np-ui-color-picker)