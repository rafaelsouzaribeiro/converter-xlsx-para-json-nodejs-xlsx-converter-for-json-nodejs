/* carregamos o module */
let XLSX = require('xlsx');
/* carregamos o arquivo xlsx */
let workbook = XLSX.readFile(__dirname+'/Master.xlsx');
/* pegamos as folhas*/
let sheet_name_list = workbook.SheetNames;
/* pegamos a primeira folha*/
let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
/* convertemos os objetos em json */
let json = JSON.stringify(xlData);

console.log(">>"+json);

/* Mostramos os resultados */
for (key in xlData) {
    console.log(key, xlData[key]);
    for (x in xlData[key]) {
        console.log(x,xlData[key][x]);
    }
}


