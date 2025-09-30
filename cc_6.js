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
        super(name, department, level);
        this.teamSize = teamSize;
    }

    describe() {
        return(`${this.name} manages ${this.department} department with a team of ${this.teamSize}.`)
    }
};



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