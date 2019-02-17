let XLSX = require('xlsx')
let workbook = XLSX.readFile(__dirname+'/Master.xlsx');
let sheet_name_list = workbook.SheetNames;
let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
let json = JSON.stringify(xlData);

console.log(">>"+json);

Object.keys(xlData).forEach(function(key) {
    console.log(key, xlData[key]);
    
    Object.keys(xlData[key]).forEach(function(x){
        console.log(x,xlData[key][x]);
    });
});

