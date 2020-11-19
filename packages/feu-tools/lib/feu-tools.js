'use strict';

function add(a, b) {
	console.log("tools库，调用函数add,入参：%d, %d",a ,b)
    return a + b;
}
function min(a, b) {
	console.log("tools库，调用函数min,入参：%d, %d",a ,b)
    return Math.min(a, b);
}

function welcome() {
    console.log("欢迎使用lerna管理项目");
}

module.exports = { add, min, welcome };