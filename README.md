# np-ui-time-picker component

<img src="https://raw.githubusercontent.com/NilavPatel/np-time-picker-package/master/src/assets/images/logo-large.png" width="300" height="80">

![image login](https://github.com/NilavPatel/np-time-picker-package/blob/master/src/assets/images/image1.PNG)

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
````


# methods
````
1.  onChange( newValue : string)
    value change event, fired when time value is changed.
    in parameter new value will be parsed.
````