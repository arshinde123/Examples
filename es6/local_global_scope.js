var num = 10
function test() {
   var num = 100
   console.log("value of num in test() "+num) // 100
}
console.log("value of num outside test() "+num) // 10
test()
