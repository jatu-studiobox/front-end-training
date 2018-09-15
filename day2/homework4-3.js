// Declaration for result
// array 'peopleSalary' สำหรับเก็บค่าข้อมูลเริ่มต้นที่ได้จากการอ่าน file JSON
let peopleSalary = [];
let peopleLowSalary = [];

// Read homework1.json
fetch('homework1.json').then(response => {
    return response.json();
})
    .then(myJson => {
        // Assign 'myJson' to 'peopleSalary'
        /* 
        ผลที่ได้ 'peopleSalary' เท่ากับ 
        [{"id":"1001", "firstname":"Luke", "lastname":"Skywalker", "company":"Walt Disney", "salary":"40000"},
        {"id":"1002", "firstname":"Tony", "lastname":"Stark", "company":"Marvel", "salary":"1000000"},
        {"id":"1003", "firstname":"Somchai", "lastname":"Jaidee", "company":"Love2work", "salary":"20000"},
        {"id":"1004", "firstname":"Monkey D", "lastname":"Luffee", "company":"One Piece", "salary":"9000000"}]
        */
        peopleSalary = myJson;

        // get low salary
        peopleLowSalary = peopleSalary.filter(people => parseInt(people["salary"]) < 100000);
        /*
        ผลที่ได้ 'peopleLowSalary' เท่ากับ 
        [{"id":"1001", "firstname":"Luke", "lastname":"Skywalker", "company":"Walt Disney", "salary":"40000"},
        {"id":"1003", "firstname":"Somchai", "lastname":"Jaidee", "company":"Love2work", "salary":"20000"}]

        ผลที่ได้ 'peopleSalary' เท่ากับ 
        [{"id":"1001", "firstname":"Luke", "lastname":"Skywalker", "company":"Walt Disney", "salary":"40000"},
        {"id":"1002", "firstname":"Tony", "lastname":"Stark", "company":"Marvel", "salary":"1000000"},
        {"id":"1003", "firstname":"Somchai", "lastname":"Jaidee", "company":"Love2work", "salary":"20000"},
        {"id":"1004", "firstname":"Monkey D", "lastname":"Luffee", "company":"One Piece", "salary":"9000000"}]
        */

        // double salary
        peopleLowSalary.map(i => i["salary"] = parseInt(i["salary"]) * 2);
        /*
        ที่ไม่ต้องมี variable ตัวใหม่มารับ ค่าจาก function map เนื่องจากเราใช้แค่ประโยชน์ function map ในการวน loop เฉย

        ผลที่ได้ 'peopleLowSalary' เท่ากับ 
        [{"id":"1001", "firstname":"Luke", "lastname":"Skywalker", "company":"Walt Disney", "salary":"80000"},
        {"id":"1003", "firstname":"Somchai", "lastname":"Jaidee", "company":"Love2work", "salary":"40000"}]

        พอมาดูผลที่ได้ 'peopleSalary' เท่ากับ 
        [{"id":"1001", "firstname":"Luke", "lastname":"Skywalker", "company":"Walt Disney", "salary":"80000"},  <==
        {"id":"1002", "firstname":"Tony", "lastname":"Stark", "company":"Marvel", "salary":"1000000"},
        {"id":"1003", "firstname":"Somchai", "lastname":"Jaidee", "company":"Love2work", "salary":"40000"}, <==
        {"id":"1004", "firstname":"Monkey D", "lastname":"Luffee", "company":"One Piece", "salary":"9000000"}]

        ตอนนี้ยังไม่รู้ว่าเพราะอะไร ค่า salary ของ 'peopleSalary' ถึงเปลี่ยนตาม 'peopleLowSalary'
        */
        console.log(peopleLowSalary);
        //console.log(peopleSalary);

        // Sum Salary
        /* 
        จาก Statement ด้านบน จะเห็นว่าสามารถ เอาค่า salary ของตัวแปร 'peopleSalary' แค่ตัวเดียวก็สามารถรวมผลลัพภ์ได้เลย
        [{"id":"1001", "firstname":"Luke", "lastname":"Skywalker", "company":"Walt Disney", "salary":"80000"},
        {"id":"1002", "firstname":"Tony", "lastname":"Stark", "company":"Marvel", "salary":"1000000"},
        {"id":"1003", "firstname":"Somchai", "lastname":"Jaidee", "company":"Love2work", "salary":"40000"},
        {"id":"1004", "firstname":"Monkey D", "lastname":"Luffee", "company":"One Piece", "salary":"9000000"}]
        */
        let sumSalary = peopleSalary.reduce((sum, people) => {
            return sum + parseInt(people["salary"])
        }, 0);
        /*
        ผลที่ได้ 'peopleLowSalary' เท่ากับ 10120000
        */
        /* ของเดิม
        let sumSalary = peopleSalary
                        .filter(function (people) {
                            return parseInt(people["salary"]) >= 100000;
                        })
                        .reduce(function (sum, peopleFilter) {
                            return sum + parseInt(peopleFilter["salary"]);
                        }, 0) + 
                    peopleLowSalary
                        .reduce((sum,peopleLowSalaryCurrent) => {
                            return sum + parseInt(peopleLowSalaryCurrent["salary"]);
                        }, 0);
        */
        console.log(sumSalary);
    })
    .catch(error => {
        console.error('Error:', error);
    });