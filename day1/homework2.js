// Declare JSON Object 'peopleSalary'
let peopleSalary = [
    {"id":"1001", "firstname":"Luke", "lastname":"Skywalker", "company":"Walt Disney", "salary":"40000"},
    {"id":"1002", "firstname":"Tony", "lastname":"Stark", "company":"Marvel", "salary":"1000000"},
    {"id":"1003", "firstname":"Somchai", "lastname":"Jaidee", "company":"Love2work", "salary":"20000"},
    {"id":"1004", "firstname":"Monkey D", "lastname":"Luffee", "company":"One Piece", "salary":"9000000"}
]

// Declare temporary array
let arrNewPeople = [];

for (let x in peopleSalary) {    // loop for 'each row peopleSalary'
    let temp = new Object();
    for (let y in peopleSalary[x]) { // loop for 'each key of row peopleSalary' -> y is Key
        //console.log("y: " + y);
        //console.log(peopleSalary[x][y]);        
        if (y != 'company') {    // Check key is not 'company' then concat string
            // Concat 'Key' and 'value'
            temp[y] = peopleSalary[x][y];
        }
    }    
    arrNewPeople.push(temp);
}
// Convert Array to JSON String
var strJsonNewPeople = JSON.stringify(arrNewPeople);

// Convert JSON String to JSON Object
var newPeopleSalary = JSON.parse(strJsonNewPeople);

console.log(JSON.stringify(newPeopleSalary));