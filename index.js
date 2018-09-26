import Box from './src/HandsomeBox';
var t1 = new Box('t1');
var t2 = new Box('t2');
t1.bind(self).setItem('name', 'jack', {expire: -(Date.now() + 9999)});
t2.bind(self).setItem('age', '20');
// t1.clear();
console.log(t1.getItem('name', true), t2.getItem('age'));
