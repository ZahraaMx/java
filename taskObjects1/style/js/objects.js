let member={
    name: "Ahmed",
    age: 20,
    country: "Iraq",
};
console.log(member.name);
console.log(member.age);
console.log(member.country);
console.log("My name is "+ member.name +" I am " + member.age +" Years old from "+ member.country+".");
console.log(member);//يطبع جميع الخصائص الخاصة بالعضو علئ شكل مصفوفة
console.log(Object.values(member));//سوف يطبع قيم الخصائص وعددهم
console.log(member.name +" @ " +member.age +" @ " + member.country);
