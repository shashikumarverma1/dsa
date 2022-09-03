class Employee{
    constructor(){
        var name;
        var age;
        var contact;
        var addres;
        var salary;
    }
    
    calcusalary(){
        console.log(this.salary)
    }
}
class dev extends Employee{
    constructor(){
        super();
        var role;
    }
}
class manager extends Employee{
    constructor(){
        super();
        var dep;
    }
}
const e=new dev();
e.name="ramu";
e.age="25";
e.addres="mangu";
e.contact="7007414506";
e.salary=155000;
e.calcusalary();
const d=new manager();
d.name="sk";
d.age="25";
d.department="ne"
d.addres="mangu";
d.contac="4001474506";
d.salary=506000
d.calcusalary()









