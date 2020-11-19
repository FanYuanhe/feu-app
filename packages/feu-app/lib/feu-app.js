'use strict';

const { min, welcome } = require('feu-tools');
const ui = require("feu-ui");

function app() {
    console.log("app主入口");
    welcome();
    let minNum = min(2, 5);
    ui(minNum);
}

app();