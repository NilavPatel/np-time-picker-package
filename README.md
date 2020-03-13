# np-ui-time-picker
Time picker custom component for Angular 9 and 9+, Created using only Angular.

## Check demo [Here](https://stackblitz.com/edit/np-ui-time-picker)

## NPM
`$ npm install np-ui-time-picker`

## HTML
````html
<np-ui-time-picker 
    [(value)]="startTime"
    (onChange)="onChangeStartTime($event)">
</np-ui-time-picker>
````

## Properties
1.  `value` : string  
    Two way data binding.  
    if 12 hrs format is set then returns value in **hh:mm:ss tt** format,  
    and if 24 hrs format is set then returns value in **HH:mm:ss** format.  
2.  `disabled` : boolean  
    true/false - set component disabled  
3.  `defaultOpen` : boolean  
    Set time picker default open or close.  
4.  `is24Hours`: boolean  
    if set to true, display 24 hours format for time.  
    default value is false.  
5.  `isOkButton` : boolean  
    If set to true then Ok button will be visible, and time picker will be only closed on click of Ok button.   
    It's default value is true.  
6.  `isNowButton` : boolean  
    Show/hide now button, on click of now button current time will be get selected.  
7.  `placeholder` : string  
    add placeholder to input box  
8.  `hideSeconds` : boolean  
    hide seconds dropdown from popup. also add/minus seconds button will be hide.  
9.  `required` : boolean  
    default value is false. add required attribute to input textbox.  
10. `name` : string  
    add name attribute to input textbox.  

## Apis  
1.  `get24hrsTimeFormat()`  
    return 24 hrs formatted time value  
2.  `get12hrsTimeFormat()`  
    return 12 hrs formatted time value  

## Methods  
1.  `onChange( newValue : string)`  
    value change event, fired when time value is changed.  
    in parameter new value will be parsed.  

## Other np-ui components for Angular
1. [Data grid](https://www.npmjs.com/package/np-ui-data-grid)
2. [Date picker](https://www.npmjs.com/package/np-ui-date-picker)
3. [Time picker](https://www.npmjs.com/package/np-ui-time-picker)
4. [Color picker](https://www.npmjs.com/package/np-ui-color-picker)

## License
This project is licensed under the MIT License.

## Contributors
![](https://raw.githubusercontent.com/NilavPatel/nilavpatel.github.io/master/images/logo-large.png)