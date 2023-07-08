function logId(id: string | number | boolean) {
    if (typeof id === "string") {
        console.log(`${id} is string`);
    } else if (typeof id === "number") {
        console.log(`${id} is number`);
    } else {
        console.log(`${id} is boolean`);
    }
}

logId(1);
logId("hi");
logId(false);

function logError(error: string | string[]) {
    if (Array.isArray(error)) {
        console.log(`${error} is array`);
    } else {
        console.log(`${error} is string`);
    }
}

logError("warning");
logError(["warning", "canceled"]);

function logObj(obj: {a: number} | {b: number}) {
    if ("a" in obj) {
        console.log(obj.a)
    } else {
        console.log(obj.b)
    }
}