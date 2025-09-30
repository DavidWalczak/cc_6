class Employees{
    constructor(name, department, level="Employee") {
        this.name = name;
        this.department = department;
        this.level = level;
    };


    describe(){
        return(`${this.name} works in the ${this.department} department.`)
    };
};

class Manager extends Employees{
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return(`${this.name} manages ${this.department} department with a team of ${this.teamSize}.`)
    }
};

// Create employees
let emp1 = new Employees("Bob", "Accounting")
let emp2 = new Employees("Jebediah", "Butter Making")
let emp3 = new Employees("Billy", "Family Business")
let emp4 = new Employees("Joel", "Scout Master")

let mang1 = new Manager("Bosephus", "Sulfur Production", 30)
let mang2 = new Manager("Alexander", "Accounting", 5)

// Company class
class Company{
    constructor() {
        this.employees = [];
    }

    addEmployee(employee){
        this.employees.push(employee);
    }

    listEmployees(){
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
};

// Step 6: Instantiate Company
const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(emp3);
myCompany.addEmployee(emp4);
myCompany.addEmployee(mang1);
myCompany.addEmployee(mang2);

myCompany.listEmployees();

function promoteLevel(level){    
    if (level === "Employee"){
        return "Manager";
    } else if(level === "Manager"){
        return "Executive";
    } else if (level === "Executive"){
        return "Director";
    } else if (level === "Director"){
        return "Partner";
    } else return "Owner";
};