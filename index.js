import HandsomeX from './src/HandsomeX';
var Vue = {};
var t = new HandsomeX('handsome');
t.bind(Vue);
var res = t.set('test', 'jack').clear().get();
console.log(res);