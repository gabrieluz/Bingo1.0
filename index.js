// Cria números aleatórios - Creates random numbers
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function rowBingo(minRow, maxRow) {
    let array = [];
    let newArray = [];

    for (let i = 0; i <= 5; i++){
            // Adiciona novos números no array - Adds new numbers to the array
            array.push(getRandom(minRow, maxRow))

            if(newArray.length < 5){
                // Impede números  repetidos no newArray - Prevents repeated numbers in newArray
                newArray = array.filter((este,o)=>array.indexOf(este)==o)
                i--
            }
    }
    newArray.sort((a, b) => a - b);
    console.log(newArray[1])
    return newArray
}
let cRow = null 
function startCardBingo(){

    let arrayB = this.rowBingo(1, 15)
    let arrayI = this.rowBingo(16, 30)     
    let arrayN = this.rowBingo(31,45)     
    let arrayG = this.rowBingo(46,60)     
    let arrayO = this.rowBingo(61,75)     
 

    let cRow0 = `<tr> <td>${arrayB[0]}</td> <td>${arrayI[0]}</td><td>${arrayN[0]}</td><td>${arrayG[0]}</td><td>${arrayO[0]}</td></tr>` 
    let cRow1 = `<tr> <td>${arrayB[1]}</td> <td>${arrayI[1]}</td><td>${arrayN[1]}</td><td>${arrayG[1]}</td><td>${arrayO[1]}</td></tr>` 
    let cRow2 = `<tr> <td>${arrayB[2]}</td> <td>${arrayI[2]}</td><td class="orange"></td><td>${arrayG[2]}</td><td>${arrayO[2]}</td></tr>` 
    let cRow3 = `<tr> <td>${arrayB[3]}</td> <td>${arrayI[3]}</td><td>${arrayN[3]}</td><td>${arrayG[3]}</td><td>${arrayO[3]}</td></tr>` 
    let cRow4 = `<tr> <td>${arrayB[4]}</td> <td>${arrayI[4]}</td><td>${arrayN[4]}</td><td>${arrayG[4]}</td><td>${arrayO[4]}</td></tr>` 

    cRow =  cRow0 +  cRow1 + cRow2 + cRow3 + cRow4;
    $('#minhaTabelaBingo tr:last ').after( `${cRow}`); 
     console.log(arrayB,arrayI ,arrayN ,arrayG ,arrayO)

    let obj = {
        "rowb":arrayB,
        "rowi":arrayI,
        "rown":arrayN,
        "rowg":arrayG,
        "rowo":arrayO
    }     
    axios.post("http://localhost:3000/tabelaBingo",obj )
    .then(({data})=>{
        if( data ) {
            alert("Salvo com sucesso!! " + data.id)
        } 
    }).catch(err=>{
        console.log(err)
    })
}
