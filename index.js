import Box from './src/HandsomeBox';
var Vue = {};
var t1 = new Box('t1');
var t2 = new Box('t2');
t1.bind(Vue).set('name', 'jack');
t2.bind(Vue).set('name', 'lilith');
// t1.clear();
console.log(t1.clear().get('name'), t2.get('name'));
console.log(Vue);
