let json = '{"fname":"Sam","lname" :"Smith"}';
let obj = JSON.parse(json);



//console.log(typeof(obj));

let obj2 = {
    fname : "Jack",
    lname : "Smith"

};
let json2 = JSON.stringify(obj2);
console.log(typeof(json2));