/* carregamos o module */
let XLSX = require('xlsx');
/* carregamos o arquivo xlsx */
let workbook = XLSX.readFile(__dirname+'/Master.xlsx');
/* pegamos as folhas*/
let sheet_name_list = workbook.SheetNames;
/* pegamos a primeira folha*/
let firstdata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
/* pegamos a segunda folha*/
let seconddata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);

/* Mostramos os resultados da primeira folha */
for (key in firstdata) {
    console.log(key, firstdata[key]);
    for (x in firstdata[key]) {
        console.log(x,firstdata[key][x]);
    }
}

/* Mostramos os resultados da segunda folha */
for (key in seconddata) {
    console.log(key, seconddata[key]);
    for (x in seconddata[key]) {
        console.log(x,seconddata[key][x]);
    }
}


