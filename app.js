"use strict";
function logId(id) {
    if (typeof id === "string") {
        console.log(`${id} is string`);
    }
    else if (typeof id === "number") {
        console.log(`${id} is number`);
    }
    else {
        console.log(`${id} is boolean`);
    }
}
logId(1);
logId("hi");
logId(false);
function logError(error) {
    if (Array.isArray(error)) {
        console.log(`${error} is array`);
    }
    else {
        console.log(`${error} is string`);
    }
}
logError("warning");
logError(["warning", "canceled"]);
