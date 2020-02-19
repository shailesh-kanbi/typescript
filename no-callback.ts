const users : string[] = ['Vanita','Paridhi'];
users.push("Ritika");
function addUsers(user : string){
    setTimeout(function(){
        console.log("1. AddUser Function - Adding "+user);
        users.push(user);
        console.log("2. AddUser Function - " +users.push(user));
        
    },200);
 
}
function getUsers(){
    setTimeout(function(){
    let getuser;
    getuser = users.pop();
    console.log("3. GetUser Function - "+getuser);
    console.log("4. GetUser Function - "+users);
    
    },200);
    
    
}

addUsers("Shailesh");
getUsers();
console.log("Main User Function - "+users);
console.log(users);






