class Employees{
    constructor(name, department, level="Employee") {
        this.name = name;
        this.department = department;
        this.level = level;
    };


    describe(){
        return(`${this.name} works in this department: ${this.department} and is a ${this.level}`)
    };
};

let employed = [
    new Employees("Bob", "Accounting"),
    new Employees("Jebediah", "Butter Making"),
    new Employees("Billy", "Family Business")
];

for (associate of employed){
    console.log(associate.describe())
};

class Manager extends Employees{
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    isExecutiveLevel(){
        
    }
}