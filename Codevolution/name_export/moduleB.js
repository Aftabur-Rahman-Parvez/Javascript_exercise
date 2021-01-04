let fname="chandal";
let lname="Hasan";
let obj={
    name:"lory",
}
export function great(message){
    console.log(message);
}

export class Person{
    constructor(){
        console.log("Constructor");
    }

    gree(){
        console.log("Person function");
    }
}

export {fname,lname,obj}