import HandsomeX from './src/HandsomeX';
var Vue = {};
var t = new HandsomeX('handsome');
t.bind(Vue);
var res = t.set('test', 'jack').get();
console.log(res, Vue);
