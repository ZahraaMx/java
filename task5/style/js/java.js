let num=100000;
//console الطباعة في 
console.log((num).toString());//console.log(100000..toString());
console.log((num).toFixed(2));
console.log(parseInt("100000 Muslim"));
console.log(parseFloat("100000 Zahraa"));
console.log(Number.isInteger(num));
console.log(Number.isNaN(num));
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.min(100000,90,80));
console.log(Math.max (100000,90,80));
console.log(Math.pow(num,3));
console.log(Math.random(num));


//الطباعة في الصفحة الرئيسية
document.getElementById("m1").innerHTML=num.toString();
document.getElementById("m2").innerHTML=parseInt("100000 Muslim");
document.getElementById("m3").innerHTML=parseFloat("100000.4 muslim");
document.getElementById("m4").innerHTML=Number.isInteger(num);
document.getElementById("m5").innerHTML=Number.isNaN(num);
document.getElementById("m6").innerHTML=num.toFixed(1);
document.getElementById("m7").innerHTML=Math.round("100000.60")
document.getElementById("m8").innerHTML=Math.pow(num,2);
document.getElementById("m9").innerHTML=Math.random(num);
document.getElementById("m10").innerHTML=num.toExponential();
document.getElementById("m11").innerHTML=num.toPrecision();//with a number written with a specified length
document.getElementById("m12").innerHTML=num.valueOf();
document.getElementById("m13").innerHTML=Math.max(100000,70,100000);


