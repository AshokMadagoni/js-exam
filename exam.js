// ouput 1

var a="        hlo";
var a1="ashok      ";
var concat=a.trimStart().concat(a1.trimEnd()).toUpperCase();
console.log(concat);

// output 2

var a="HelLoAshOkGoUd";
var middlepart=a.slice(5,10).toLowerCase()
var lastindex=middlepart.length-1;
console.log(middlepart);
console.log(lastindex);

//  output 3

var a="ashok";
var concat=a.concat("m").toUpperCase();
var lastsecondchar=concat.at(-2)
console.log(concat);
console.log(lastsecondchar);

// output 4

var a="ashok";
var a1="goud";
var concat=a.slice(0,3).concat(a1.slice(0,3));
var result=concat[0].toUpperCase()+concat.slice(1,length-1)+concat[concat.length-1].toUpperCase()
console.log(concat);
console.log(result);

// output 5

var a="       ashok       ";
var a1="goud"
var trim=a.trim();
var fstandlstupper=trim[0].toUpperCase()+trim.slice(1,4)+trim[trim.length-1].toUpperCase()
var result=trim.slice(0,3).concat(a1)
console.log(fstandlstupper);
console.log(result);

// output 6

var a="hello there , how are you" ;
var result=a.indexOf("are")
console.log(result);

// 7.Answer

var smartphone={
    brand:"redmi",
    model:"8A",
    price:"10000",
}
Object.seal(smartphone);
smartphone.price="99999"
console.log(smartphone);
console.log(Object.isSealed(smartphone));

// 8.Answwer

var book={
    title:"mystory",
    author:"ashok",
    publishedyear:"2025"
}
Object.freeze(book);
book.publishedyear="3000"
console.log(book);
console.log(Object.isFrozen(book));

// 9.Answer

var person={
    firstname:"ashok",
    lastname:"goud",
    age:"20"
}
console.log(Object.keys(person),Object.values(person));

// 10.Answer

var course={
    title:"fullstack",
    instructor:"vamshi",
    duration:"7months"
}
console.log(Object.entries(course));
delete course.duration
console.log( course)

// 11. Answer

var employee={
    name:"ravi",
    position:"softwaredeveloper",
    salary:"99999"
}
Object.seal(employee);
employee.position="tester"
employee.age="30"
console.log(employee);
console.log(Object.keys(employee));

// 12.Answer

var a="madagoniashokgoud";
var extract=a.slice(8,13).toUpperCase();
console.log(extract);

// 13.Answer

var a="ashok";
var result=a.toUpperCase();
var length=a.length;
console.log(result);
console.log(length);

// 14.Answer

var a="ashok";
var charat=a.charCodeAt(a.charAt(2));
console.log(charat);

// 15.Answer

var a="     ashok      "
var result=a.trim().slice(2,5);
console.log(result);

// 16.Answer

var a="Ashok";
var b="GouD";
var result=a.concat(b.toLowerCase());
console.log(result);

// 17.Answer

var a="     ashokgoud";
var trim=a.trimStart().slice(2);
console.log(trim);

// 18.Answer

var a="ashokgoud";
var result=a.toLocaleUpperCase().charAt(4)
console.log(result);

// 19.Answer

var a = 5;
var b = 10;
var c = 20;
var result=a * b + c;
console.log(result)
console.log(result==100);
console.log(result>=100);
console.log(result<=100);
console.log(result===100);
console.log(result!=100);

// 20.Answer

var  x = 8 ;
var  y = 12;
var c=x>5||y<20;
console.log(c);

// 21.Answer

var num1 = 25;
var num2 = 35;
var c=num1>num2?"yes num1 is great":"no num1 is less than num2";
var d=num1<num2?"yes num2 is great":"no num1 is less than num2";
console.log(c);
console.log(d);


// 22.Answer

var m = 15;
var  n = 10;
var substraction=m-n;
var division=m/n;
var result1=substraction%2==0?"even":"odd"
var result2=division%2==0?"even":"odd"
console.log(result1);
console.log(result2);

// 23.Answer

var age = 18;
console.log(age==18);
console.log(age===18);


























