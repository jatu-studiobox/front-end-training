class CEO extends Employee {
    constructor(firstname, lastname, salary) {
        super(firstname, lastname, salary);
        this.dressCode = 'suit';
    }
    getSalary() {  // simulate public method
        return super.getSalary()*2;
    };
    work (employee) {  // simulate public method
        this._fire(employee);
        this._hire(employee);
        this._seminar();
        this._golf();
    }
    increaseSalary(employee, newSalary) {
        let result = employee.setSalary(newSalary);
        if (!isNaN(parseFloat(result)) && isFinite(result)){
            console.log(`Somsri's salary has been set to ${result}`)
        }
        else{
            console.log(`Somsri's salary is less than before!!`)
        }
    }
    _golf () { // simulate private method
        this.dressCode = 'golf_dress';
        console.log("He goes to golf club to find a new connection." + " Dress with :" + this.dressCode);
        
    };
    gossip(employee, strSay){
        console.log(`Hey ${employee.getFirstname()}, Today is very cold!`)
    }
    _fire(employee){
        console.log(`Somsri has been fired! Dress with :${employee.dressCode}`)
    };
    _hire(employee){
        console.log(`Somsri has been hired back! Dress with :${employee.dressCode}`)
    };
    _seminar(){
        console.log(`He is going to seminar Dress with :${this.dressCode}`)
    };
}