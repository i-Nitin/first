console.error("An error")
console.warn("warning")

//datatypes: string,number,boolean,null,undefined,symbol
const name="nitin";
const age=19;
const rate=3.9;
const x=null;
const y=undefined;
let z;
//template string
console.log(`name is ${name} and I am ${age}`);
const des=`name is ${name} and I am ${age}`;
console.log(des);
console.log(des.toUpperCase().substring(0,10));
const s="nitin , kumar , math, pen";
console.log(s.split(" , "));

//array
const arr=new Array(1,2,3);//consrtuctor
const ar=[1,2,3,4,"fruit",4.8];
ar.push(90);
ar.unshift("Mr");
ar.pop();
console.log(Array.isArray(ar))
console.log(ar.indexOf(4));
console.log(ar);

//objects
const people={
    name:"nitin",
    age:19,
    rn:190,
    address:{
        hn:41,
        street:"st 1",
        city:"meerut"
    }
}
console.log(people.address.city);

const det=[
    {
        ind:1,
        work:"play",
        status:false
    },
    {
        ind:2,
        work:"walk",
        status:true
    },
    {
        ind:3,
        work:"exercise",
        status:true
    }
];
console.log(det[1].work);
const detjson=JSON.stringify(det);
console.log(detjson);

//loop
for(let i=0;i<det.length;i++)
{
    console.log(det[i].work);
}

let j=0;
while(j<2)
{
    console.log(det[j]);
    j++;
}

//forEach,map,filter
det.forEach(function(tmp){
    console.log(tmp.status);
});
ar.forEach(function(kk){
    console.log(kk);
});
const newar=ar.map(function(kk){
    return kk;
});
console.log(newar);

console.log(typeof(ar[1]));
const filterar=det.filter(function(kk){
    return (kk.status==true);
});
console.log(filterar);

//conditional
const xx=10;
if(xx==10) console.log(`xx is ${xx}`);

//functions
function add(num1=1,num2=2){
    return num1+num2;
}
console.log(add());

//arrow function
const res=(n1,n2)=>{
    return n1+n2;
}
console.log(res(1,5));

//function constructor
function Person(fName,lName,dob){
    this.fName=fName;
    this.lName=lName;
    this.dob=new Date(dob);
}
const p1=new Person("nitin","kumar",'12-18-2001');
console.log(p1.dob.getDay());
console.log(p1.dob);

//single element
console.log(document.getElementById('my-name'));
console.log(document.querySelector('h1'));

//multiple element
console.log(document.getElementsByTagName('h1'));

const ul=document.querySelector('.item');
//ul.lastElementChild.remove();
ul.firstElementChild.textContent="Kumar";
ul.lastElementChild.innerHTML="btech";
ul.children[1].innerText='3rd';
ul.children[3].innerHTML="PPO";
console.log(ul);