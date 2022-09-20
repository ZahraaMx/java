let student={    //object1
    
    first_name: "Zahraa",
    "last name":"Jasm",
    age: 22,
    skilles:["Html","Css","Java Script","Project management","PHP"],
    mark:{
        maths:90,
        networks:80,
        translators:80,
    },
    address:{
        Iraq:{
            one:"Wasit",
            two:"Baghdad",
            three:"Karbala",
        },
        Turkey:"Istanbul",
    },
    check:function(){ 
        if(student.mark.maths <= 90)
        return "Excellence";
        else
        return "very well";
    },
};
//---------------------------------------------------------------------

let student2=new Object();  //object2
student2.first_name="Muslim";
student2.last_name="Hussain";
student2.age=20;
student2.mark={
    maths:70,
    networks:80,
    translators:90,
};

student2.recovery=function(){
    return this;
};

student2.full=function(){
    return this.first_name+"  "+this.last_name;
};
//------------------------------------------------------------------
let student3={};      //object3
student3.first_name="Zainab";
student3["last name"]="Ahmed";
student3["address"]={
    Turkey:{
        one:"Amasya",
        two:"Adana",
        three:"Ankara"
    },
    Egypt:"Ciro",
};
student3.mark=[
    maths=50,
    networks=80,
    translators=70];

student3.chec=function(){
    if(student3.address.Turkey===student3.address.Turkey)
    return student3.address.Turkey.one;
    else
    return "No";
};

student3.ss=function(){
    if(student3.mark[2]<=79)
    return "Good";
    else
    return 'No';

};
//-------------------------------------------------------------
console.log(student);
console.log(student.skilles[4])
console.log(student.skilles.join(" & "))
console.log(student.check());

console.log(student2.recovery())
console.log(student2.full())
console.log(student2.mark.maths)
console.log(student2.mark["translators"])

console.log(Object.values(student3))
console.log(student3.chec())
console.log(student3.mark)
console.log(student3.ss())