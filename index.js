import Box from './src/HandsomeBox';
var scope = {};
var t1 = new Box('t1');
var t2 = new Box('t2');
t1.bind(scope).setItem('name', 'jack', {expire: -(Date.now() + 9999)}).getItem('name', true);
t2.bind(scope).setItem('age', '20').deleteItem('age');
// t1.clear();
console.log(t1.getItem('name', true), t2.getItem('age'));
