const WP=require('./core.js'),a=require('assert');
a.equal(WP.count('hello  big world'),3);a.equal(WP.count('1,500'),1500);a.equal(WP.count(''),0);
a.equal(WP.fmt(500,130),'3 min 51 sec');a.equal(WP.fmt(0,130),'0 sec');a.equal(WP.fmt(30000,130),'3 hr 50 min');
console.log('ok')
