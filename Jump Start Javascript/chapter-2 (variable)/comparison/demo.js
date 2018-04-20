if(1 == 1)
{
  console.log("true");
}
else {
  console.log("false");
} // output : true


if("1" == 1) //converts "1" to  1 (number)
{
  console.log("true");
}
else {
  console.log("false");
} // output : true

if("1" === 1) //doesn't converts "1" to  1 (number)
{
  console.log("true");
}
else {
  console.log("from strict: false");
} // output : false


if(1 == true)
{
  console.log("true");
}
else {
  console.log("false");
} // output : true


if(0 == false){
  console.log("true");
}
else {
  console.log("false");
} // output : true

if("" == 0) //converts "" to 0
{
  console.log("true");
}
else {
  console.log("false");
} //output : true


if("  " == 0) //convets "  " to 0
{
  console.log("true");
}
else {
  console.log("false");
} //output : true


if(0 == 1)
{
  console.log("true");
}
else {
  console.log("false");
} //output : false


if(1 == false)
{
  console.log("true");
}
else {
  console.log("false");
} //output : false


if(0 == true)
{
  console.log("true");
}
else {
  console.log("false");
} //output : false


var x,y;
x = {};
y = x;
if(x == y) // x & y refers to same object in memory
{
  console.log("true");
}
else {
  console.log("false");
} //output : true

if(x == {})
{
  console.log("true");
}
else {
  console.log("false");
} //output : false


// Equal operator --> ==
// Strict Equal --> === (unlike equal operator no type conversion)

//Not Equal --> != (exactly reverse of Equal Operator)
//Strict Not Equal --> !== (unlike not equal operator no type conversion)
