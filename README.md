# HandsomeBox
Lightweight data store for web application, and there are only 6 simple api methods for U.Please enjoy it

# Install
```
npm install --save handsome-box
```
# Usage
```
import Store from 'handsome-box';
var t1 = new Store('t1');
var t2 = new Store('t2');
var obj = {};
t1.bind(window).setItem('name', {names: ['jack', 'lilith'], data: {age: 20, money: '10k'}}, {mode: 'sessionStorage', expire: -(Date.now() + 2000)}).setItem('money', 998);
t2.bind(obj).setItem('age', 20).setItem('aaa', 'aaa').removeItem('aaa');
console.log('t1.name', t1.getItem('name'));
console.log('t1.money', t1.getItem('money', true));
console.log('t2.age', t2.getItem('age'));
console.log(t1.list(), t2.list());
t2.clear();
console.log(t2.list());
console.log(obj);
```
# API
## bind
bind handsome-box instance to your custom object\
params: (obj: Object)
## setItem
for saving data\
params: (key: String, value: any, option: Object)\
option example: `{mode: "sessionStorage", expire: Date.now() + 3600}`\
mode optional value: `"cookie"` | `"sessionStorage"` | `"localStorage"`\
expire shold be a `timestamp`
## getItem
for getting data\
params: (key: String, isDetail: Boolean)
## removeItem
for removing data\
params: (key: String)
## clear
clear all saved data
## list
list all key in one instance

# TODO
indexDB and webSQL support
