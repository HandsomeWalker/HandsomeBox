import Box from './src/HandsomeBox';
var scope = {};
var t1 = new Box('t1');
var t2 = new Box('t2');
t1.bind(scope).setItem('name', 'jack');
t2.bind(scope).setItem('name', 'lilith');
// t1.clear();
console.log(t1.getItem('name'), t2.getItem('name'));
console.log(scope.t1.getItem('name'));
