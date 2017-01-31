// var add = function(a,b){
//   return a + b;
// }
//
// console.log(add(1,2));
//
// var addNum = [2,2];
//
// console.log(add(...addNum));
var person = ['nir', 28];
var person2 = ['aharon', 29];

var printName = function(name, age){
  return 'hi ' + name + ' you are ' + age;
}


console.log(printName(...person));

var names = ['nir2', 'nir1' ];
var final = ['nir', ...names];

final.forEach(function(name){
  console.log('hi ' + name );
});
