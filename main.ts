export{}
let message = "Hello World 2";
console.log(message);

let myName : string = 'Shailesh';
let myNumber : number = 961;

let list : number[] = [1,2,3,4];
let list2 : Array<number> = [5,6,7,8];

let person1 : [string, number] = ['Sam', 34];

enum Car {Suzuki, Hyundai, Honda};

let c : Car = Car.Suzuki;
console.log(c);


console.log(message.toUpperCase());

function add ( num1 : number , num2 : number){
    return num1 + num2;
}

console.log(add(14,26) );

var add2 = add;

console.log(add2);
console.log(add2(23,32));


interface Person {
    firstName : string;
    lastName : string;
}
function fullName(person:Person)   {
    console.log(person.firstName + ' '+person.lastName);
}
let p = {
    firstName : 'Shailesh',
    lastName : 'Kanbi'
};
fullName(p);

class Student {
    studentName : string;

    constructor(name : string){
        this.studentName = name;
    }
    pray()
    {
        console.log("Students are praying now!");
        
    }
}
 
let std1 = new Student('Shailesh');
console.log(std1.studentName);
std1.pray();

class Monitor extends Student{
    constructor(monitorname:string){
        super(monitorname);
    }
    delegateTask(){
        console.log("Monitor delegating Tasks!");
        
    }
}   
let queue = [];
let ExecuteCommand='ExecuteCommand',PrintCommand='PrintCommand',SavePower='SavePower';
let Command;

function enqueue ( command): void {
    queue.push(command);
}
function dequeue ():any{
    let command = queue.pop();
    return command;
}
enqueue(PrintCommand);
queue.push(PrintCommand);
enqueue(SavePower);
console.log("Enqueue commands->");
let commmand2;
//commmand2 = queue.dequeue();
console.log(commmand2);
console.log(queue);
queue.push(ExecuteCommand);
console.log(queue);





queue.push(ExecuteCommand);
Command = queue.pop();
if (Command == ExecuteCommand)
{
    console.log("Command is same as ExecuteCommand");
    
}
let m1 = new Monitor("Paridhi");
m1.pray();
m1.delegateTask();
console.log(m1.studentName);

