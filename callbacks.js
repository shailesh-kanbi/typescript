var users2 = ['Vanita', 'Paridhi'];
users2.push("Ritika");
function addusers2(user, callback) {
    setTimeout(function () {
        console.log("1. AddUser Function - Adding " + user);
        users2.push(user);
        console.log("2. AddUser Function - " + users2.push(user));
    }, 200);
    callback();
}
function getusers2() {
    setTimeout(function () {
        var getuser;
        getuser = users2.pop();
        console.log("3. GetUser Function - " + getuser);
        console.log("4. GetUser Function - " + users2);
    }, 200);
}
addusers2('Shailesh', getusers2);
//downloaded from git and upload again
