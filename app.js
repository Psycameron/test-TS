"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isPaymentSuccess(res) {
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    else {
        return false;
    }
}
function getIdFromData(res) {
    if (isPaymentSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
const successResult = {
    status: PaymentStatus.Success,
    data: {
        databaseId: 567,
        sum: 10000,
        from: 2,
        to: 4
    }
};
getIdFromData(successResult);
