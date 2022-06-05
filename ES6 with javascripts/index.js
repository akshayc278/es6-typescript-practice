function sayHello(){
    for(var j=0;j<10;j++){
        console.log(j);
    }
    console.log(j);
    for(let i=0;i<10;i++){
        console.log(i);
    }
    //console.log(i);//not allowed

    const x=3;
    console.log(x);
    //x=2;//not allowed

}
sayHello();


const person = {
    name:'moksh',
    walk(){},
    talk(){console.log('is talking')}
};
person.talk();
person['name']='john';
console.log(person.name);
const updateName='name';
person[updateName]= 'kelie'
console.log(person.name);

const employee = {
    name:'moksh',
    walk(){
        console.log(this);
    }
}
employee.walk();
console.log('---');
//wal ;walk(); not applicable to call //strict mode is enable
const walk = person.walk.bind(employee);
walk();


const square = (number) =>{
    return number * number;
}
console.log(square(4));
//usefull way 

const jobs= [
    {id : 1 , isActive:true},
    {id : 2 , isActive:false},
    {id : 3 , isActive:true},
];

const activeJobs = jobs.filter(jobs => jobs.isActive);
console.log(activeJobs);

const employee2 = {
    talk(){
        setTimeout(() => {
            console.log('this',this);
        },1000);
    }
};
employee2.talk();

const colors = [ 'red' ,'blue', 'green' ];
const op=colors.map(color => {
    return '<li>' + color+ '</li>';
});
console.log(op);
const op2= colors.map(color => `<li>${color}</li>`);
console.log(op2);

const address = {
    street: '',
    city: '',
    country: ''
};
const street = address.street;
const city = address.city;
//or 
const {street:st} =address;
//st is as a variable // u can just use street
address.street = 'streetname';

const {street:st1} =address;
console.log(st1);

const first=[1,2];
const sec=[3,4];
const combine= first.concat(sec);
console.log(combine);
const combine2=[...first,'a']//clone 
console.log(combine2);

const name1={ name: 'moksh'};
const second= {job: 'instructor'};
const loc={...name1, ...second, loca:"australia"};
console.log(loc);


class CoolPerson {
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log("walk");
    }
}
const personCool=new CoolPerson();
console.log(personCool.name);
const personCool2=new CoolPerson("akshay");
console.log(personCool2.name);

class Teacher extends CoolPerson{
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }
    teach(){
        console.log("teach");
    }
}

const teacher =new Teacher("akshay2",'msc');
console.log(teacher.degree);
// type export before coolPerson class to export 
//class files can be saved as coolperson.js
//to import in other class 'import {CoolPerson} from './coolperson'