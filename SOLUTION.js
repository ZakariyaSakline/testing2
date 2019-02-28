var date = new Date();
document.getElementById("show").innerHTML = date;


var date = new Date().getDay();
var day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
document.getElementById("day").innerHTML = "Today is " + day[date];

var hour = new Date().getHours();
var minute = new Date().getMinutes();
var second = new Date().getSeconds();
var time = "";

if (hour < 12) {
    time = "AM";
}
else {
    time = "PM";
}

document.getElementById("time11").innerHTML = hour + " : " + minute + " : " + second + " " + time;



function currpage() {
    window.print();
}
//new
var a = 6;
var b = 7;
var c = 8;
var s = (a + b + c) / 2;
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
document.getElementById("are1").innerHTML = "Total area is :" + area;


/*--solution 4 --*/
function leapyear() {
    var year = document.getElementById('leapYear').value;
    var tempResult = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    var result = tempResult ? "Leap Year" : "Not Leap Year";
    document.getElementById('leapYearResult').innerHTML = result;
}
/*--solution 5 --*/

var year;
for (year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0)
        document.getElementById("checksunday").innerHTML = "1 st january is being sunday :" + year + "<br>";
}
/*--5,8--*/
function multiply() {
    var num1 = document.getElementById("1num").value;
    var num2 = document.getElementById("2num").value;
    document.getElementById("result").innerHTML = num1 * num2;

}

function division() {
    num1 = document.getElementById("1num").value;
    num2 = document.getElementById("2num").value;
    document.getElementById("result").innerHTML = num1 / num2;

}
//-----faren to cel 6
function f2c(f) {
    return (5 / 9) * (f - 32);
}
document.getElementById("ftoc").innerHTML = "Fahrenheit to celcius :" + f2c(250);

// --solution 12--
document.getElementById("url").innerHTML = "Current page url is :" + (document.URL);

//---solution 13
var name = "zakariya";
var n = 104;
this[name] = n;
document.getElementById("variablename").innerHTML = "name variable is :" + this[name];
//--solution 14
var html = "start.php";
var php = "finish.html";
document.getElementById("extention1").innerHTML = html.split(' . ').pop();
document.getElementById("extention2").innerHTML = php.split(' . ').pop();
//solution 15
function difference1(n) {
    var n;
    if (n <= 13) {
        return (13 - n);
    }
    else {
        return (n - 13) * 2;
    }
}
document.getElementById("diff1").innerHTML = difference1(25);
// again
function difference() {
    var n = document.getElementById("numbe").value;
    if (n <= 13) {
        document.getElementById("diff").innerHTML = "when n is less than 13 ,then result is:" + (13 - n);
    }
    else {
        document.getElementById("diff").innerHTML = "when n is greater than 13, then result is: " + (n - 13) * 2;
    }
}
//solution 16
function difference2() {
    var n1 = parseInt(document.getElementById("number1").value);
    var n2 = parseInt(document.getElementById("number2").value);
    var n3 = n1 + n2;
    if (n1 != n2) {

        document.getElementById("sum3").innerHTML = "when numbers  is not equal ,then result is:" + (n3);
    }
    else {
        document.getElementById("sum3").innerHTML = "when number is equal, then result is: " + (n3) * 3;
    }
}

// solution 17
function difference3() {
    var n = document.getElementById("newnum").value;
    if (n > 19) {
        document.getElementById("newnum1").innerHTML = "when n is greater than 19 ,then result is:" + (n-19)*3;
    }
    else {
        document.getElementById("newnum1").innerHTML = "when n is less or equal than 19, then result is: " + (n - 19);
    }
}

// solution 18
function difference4(){
var num3=parseInt(document.getElementById("number3").value);
var num4=parseInt(document.getElementById("number4").value);
if((num3==50 || num4==50)||(num3 + num4 ==50)){
document.getElementById("sum4").innerHTML="true";
}
else{
    document.getElementById("sum4").innerHTML="false"
}
}
//solution 19
function given_integer(x){
return ((math.abs(100-x)<=20)||(math.abs(400-x)<=20));
}
document.getElementById("integer").innerHTML=given_integer(25);
// solution 20
function check_neg_pos(){
    var n4 = document.getElementById("number5").value;
    var n5 = document.getElementById("number6").value;
    if ((n4 >= 0)&&(n5<=0)) {
        document.getElementById("neg_pos").innerHTML = "when one number is pos and one is neg:";
    }
    else {
        document.getElementById("neg_pos").innerHTML = "when input is not currect";
    }
}
// solution 31
function biggervalue(){
    var value1=document.getElementById("text9").value;
    var value2=document.getElementById("text10").value;
    var value3=document.getElementById("text11").value;
    var max;
    if(value1>value2){
     max= value1;
    }
    else{
       max= value2;
    }
    if(value3>max){
        max=value3;

    }
document.getElementById("result9").innerHTML=max;
}

//solution 32
function nearest100(){
    var a=document.getElementById("text12").value;
    var b=document.getElementById("text13").value;
var a1=Math.abs(100-a);
var b1=Math.abs(100-b);
    if(a1<b1){
        document.getElementById("result10").innerHTML=" First number is nearest to 100";
    }
    else{
        document.getElementById("result10").innerHTML="Second number is nearest to 100";
    }
   
}
//solution 33

function innervalue(){
    var a=document.getElementById("text14").value;
    var b=document.getElementById("text15").value;
var inner;
    if((a>=40 && a<=60 && b>=40 && b<=60)
    ||
    (a>=70 && a<=100 && b>=70 && b<=100)){
        inner="This values are currect ";
    }
    else{
        inner=" This values are not currect";
    }
   document.getElementById("result11").innerHTML=inner;
}

//solution 34

function innerbigger(){
    var a=document.getElementById("text16").value;
    var b=document.getElementById("text17").value;
    if(a>=40 && a<=60 && b>=40 && b<=60){
        var max;
        if(a>b){
            max=a;
        }else{
            max=b;
        }
        document.getElementById("result12").innerHTML=max;    }
    else{
        document.getElementById("result12").innerHTML=" This values are not currect";
    }
   
}
//solution 37
function uppertolower(){
    var str=document.getElementById("text18").value;
    if(str.length <= 3){
document.getElementById("result13").innerHTML=str.toUpperCase();
    }
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = str.substring(3, str.length);  
    document.getElementById("result13").innerHTML= front_part + back_part;
}
//solution 38

function greating(){
    var num=document.getElementById("text19").value;
    var result;
    if(num>=89 && num<=100){
result="True";
    }
   else{
result="False";
   }
    document.getElementById("result14").innerHTML= result;
}
// solution 39
function sum10(){
    var x=parseInt(document.getElementById("text20").value);
    var y=parseInt(document.getElementById("text21").value);
    var xy=x+y;
    var result;
    if(xy>50 && xy<80){
result="The sum is around 65";
    }else{
        result="Thr sum is around 80";
    }
    document.getElementById("result15").innerHTML=result;
}
//solution 40
function check_from_two(){
    var x=parseInt(document.getElementById("text22").value);
    var y=parseInt(document.getElementById("text23").value);
     var sum=x+y;
     var difference=x-y;
//      var result;
     if((x==8) || (y==8) ||(sum==8)||(difference==8)){
     var result="The input is true";
     }else{
      var   result="The input is False";
     }
document.getElementById("result16").innerHTML=result;
}
//solution 41
function samenumber(){
    var a=parseInt(document.getElementById("text24").value);
    var b=parseInt(document.getElementById("text25").value);
    var c=parseInt(document.getElementById("text26").value);
    var result;
    if((a==b)&&(b==c)){
result="The number is 30";
    }
  else if((a==b)||(b==c)||(a==c)){
result="the number is 20";
    }
    else{
result="the number is 40";
    }
document.getElementById("result17").innerHTML=result;
}
//solution 43
function samelast_digit(){
    var p=parseInt(document.getElementById("text27").value);
    var q=parseInt(document.getElementById("text28").value);
    var r=parseInt(document.getElementById("text29").value);
   var result;
if( (p % 10 === q % 10)|| (p % 10===r % 10)||(q %10 ===r%10)){
result="True";
}else{
    result="false";
}
document.getElementById("result18").innerHTML=result;

}

//solution 53
function checka_b(){
    var a=document.getElementById("text40").value;
var result=((/a...b/).test(a)) ||((/b...a/).test(a));
document.getElementById("result30").innerHTML=result;

}
//solution 54
function vowel_count(){
    var a=document.getElementById("text41").value;
 var result=a.replace(/[^aeiou]/g, "").length;
 document.getElementById("result31").innerHTML=result;

}
//solution 60
function cutting(){
    var a=document.getElementById("text47").value;
  var result=a.substring(1,a.length -1);
  document.getElementById("result37").innerHTML=result;
 
}
//solution 61
function twoconcat(){
    var a=document.getElementById("text48").value;
    var b=document.getElementById("text49").value;
var x=a.substring(1);
var y=b.substring(1);
var z=x + y;
document.getElementById("result38").innerHTML=z;

}
//solution 62
function addthree(){
    var a=document.getElementById("text50").value;
   var b="minhaj";
   var x=b.substring(b.length -3);
   var result=x + a;
   document.getElementById("result40").innerHTML=result;
 
}
//solution 63
function midd_cha(){
    var a=document.getElementById("text51").value;
  if(a.length % 2!==0){
      var x=(a.length +1)/2;
      var result=a.slice(x-2 , x+1);

  }else{
      var result="undifine input";
  }

  document.getElementById("result41").innerHTML=result;

}
//solution 64
function compair(){
    var a=document.getElementById("text52").value;
    var b=document.getElementById("text53").value;
var x=Math.min(a.length,b.length);
var result=a.substring(a.length-x) + b.substring(b.length-x);
document.getElementById("result43").innerHTML=result;

}

//solution 65
function  end_with_Script(){
    var a=document.getElementById("text54").value;
var l=a.length;
var result;
if(a.substring(l-6 , l)=="script"){
result="True";
}else{
    result="False";
}
document.getElementById("result44").innerHTML=result;

}

//solution 66
function display_city_name(){
    var result;
    var a=document.getElementById("text55").value;
  if((a.length>=3)&&((a.substring(0,3)=="Ban")||(a.substring(0,3)=="New"))){
result=a;
  }else{
      result="Wrong input";
  }
  document.getElementById("result45").innerHTML=result;

}








