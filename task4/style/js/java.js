function age() {
    let today = new Date();//كائن تاريخ الحالي
    let inDate = new Date(document.getElementById("input").value);//متغير تاريخ الذي يدخله المستخدم
    let birthMonth,birthDate,birthYear;//متغير لكل من اليوم والشهر
    
    let birthDet = {  
        date:inDate.getDate(),
        month:inDate.getMonth()+1,
        year:inDate.getFullYear()
    }
    let currYear = today.getFullYear();
    let currMonth = today.getMonth()+1;
    let currDate = today.getDate();

    birthYear = currYear - birthDet.year; //لحساب السنه اطرح الحالي من سنة الميلاد

    if(currMonth >= birthDet.month){ //اذا الشهر اصغر من الميلاد اطرح عادي 
        birthMonth = currMonth - birthDet.month;
    }
    else{//عدا ذلك اي اذا اصغر فيتم جمع عدد الاشهر 12 مع الحالي 
        birthYear--;
        birthMonth = 12 + currentMonth - birthDe.month;
    }

    if(currDate >= birthDet.date){
        birthDate = currDate - birthDet.date;
    }
    else{
        birthMonth--;
        birthDate = 30 + currDate - birthDet.date;
    }
    disResult(birthDate,birthMonth,birthYear);//استدعاء دالة النتائج
}
function disResult(bDate,bMonth,bYear){ //دالة عرض نتائج ثلاث متغيرات مباشره لاضافه كل من اليوم والشهر والسنة
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;

}