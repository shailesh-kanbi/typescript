"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World 2";
console.log(message);
var myName = 'Shailesh';
var myNumber = 961;
var list = [1, 2, 3, 4];
var list2 = [5, 6, 7, 8];
var person1 = ['Sam', 34];
var Car;
(function (Car) {
    Car[Car["Suzuki"] = 0] = "Suzuki";
    Car[Car["Hyundai"] = 1] = "Hyundai";
    Car[Car["Honda"] = 2] = "Honda";
})(Car || (Car = {}));
;
var c = Car.Suzuki;
console.log(c);
console.log(message.toUpperCase());
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(14, 26));
var add2 = add;
console.log(add2);
console.log(add2(23, 32));
function fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
}
var p = {
    firstName: 'Shailesh',
    lastName: 'Kanbi'
};
fullName(p);
var Student = /** @class */ (function () {
    function Student(name) {
        this.studentName = name;
    }
    Student.prototype.pray = function () {
        console.log("Students are praying now!");
    };
    return Student;
}());
var std1 = new Student('Shailesh');
console.log(std1.studentName);
std1.pray();
var Monitor = /** @class */ (function (_super) {
    __extends(Monitor, _super);
    function Monitor(monitorname) {
        return _super.call(this, monitorname) || this;
    }
    Monitor.prototype.delegateTask = function () {
        console.log("Monitor delegating Tasks!");
    };
    return Monitor;
}(Student));
var queue = [];
var ExecuteCommand = 'ExecuteCommand', PrintCommand = 'PrintCommand', SavePower = 'SavePower';
var Command;
function enqueue(command) {
    queue.push(command);
}
function dequeue() {
    var command = queue.pop();
    return command;
}
enqueue(PrintCommand);
queue.push(PrintCommand);
enqueue(SavePower);
console.log("Enqueue commands->");
var commmand2;
//commmand2 = queue.dequeue();
console.log(commmand2);
console.log(queue);
queue.push(ExecuteCommand);
console.log(queue);
queue.push(ExecuteCommand);
Command = queue.pop();
if (Command == ExecuteCommand) {
    console.log("Command is same as ExecuteCommand");
}
var m1 = new Monitor("Paridhi");
m1.pray();
m1.delegateTask();
console.log(m1.studentName);
