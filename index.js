import Box from './src/HandsomeBox';
var scope = {};
var t1 = new Box('t1');
var t2 = new Box('t2');
t1.bind(scope).set('name', 'jack');
t2.bind(scope).set('name', 'lilith');
// t1.clear();
console.log(t1.get('name'), t2.get('name'));
console.log(scope.t1.get('name'));
