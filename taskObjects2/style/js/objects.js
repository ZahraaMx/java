let member={
    first_name: "Zahraa",
    "last name":"Jasm",
    age: 22,
    country: "Iraq",
    address:{

        Iraq:{
            one:"Wasit",
            two:"Baghdad",
            three:"Karbala",
        },

        Egypt:"Cairo",

        Turkey:"Istanbul",
    },

    mark:{
        maths:90,
        arabic:80,
        translators:80,
    },
    //---------------------Method--------------------
    check:function(){ 
        if(member.mark.maths <= 90)
        return "Excellence";
        else
        return "very well";
    },

    add:function(){
        if(member.address.Iraq===member.address.Iraq)
        return member.address.Iraq.one;
        else
        return "No";
    },
};
console.log(member.first_name +" "+member["last name"]);
console.log(member.age)
console.log(member.country)
console.log(member.check())
console.log(member.add())
console.log(member.address.Iraq.three)
console.log(member.mark.translators)
console.log(member.mark["maths"])
console.log("My name is "+ member.first_name+" "+member["last name"] +" I am " + member.age +" Years old from "+ member.country+".");
