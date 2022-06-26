let z="Muslim Zahraa";
console.log(z[0].toLowerCase());
console.log(z.slice(0,1).toLowerCase());
console.log(z.substring(0,1).toLowerCase());
console.log(z.substr(0,1).toLowerCase());
console.log(z.split("",1).toString().toLowerCase());
console.log(z.charAt(0).toLowerCase());

document.getElementById("m1").innerHTML=z.slice(0,1).toLowerCase();
document.getElementById("m2").innerHTML=z.substring(0,1).toLowerCase();
document.getElementById("m3").innerHTML=z.substr(0,1).toLowerCase();
document.getElementById("m4").innerHTML=z.charAt(0).toLowerCase();
document.getElementById("m5").innerHTML=z[0].toLowerCase();
document.getElementById("m6").innerHTML=z.split("",1).toString(0).toLowerCase();
