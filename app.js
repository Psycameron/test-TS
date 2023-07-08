"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["PENDING"] = 2] = "PENDING";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "Success",
    statusCode: 1,
};
if (res.statusCode === StatusCode.SUCCESS) {
    console.log('success');
}
const res2 = 1 /* Roles.ADMIN */;
