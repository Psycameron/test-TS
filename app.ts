interface IPayment {
	sum: number;
	from: number;
	to: number;
}

enum PaymentStatus {
	Success = "success",
	Failed = "failed",
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}

type foo = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function isPaymentSuccess(res: Res): res is IResponseSuccess{
    if (res.status === PaymentStatus.Success) {
        return true;
    } else {
        return false;
    }
}

function getIdFromData(res: Res): number {
	if (isPaymentSuccess(res)) {
		return res.data.databaseId;
	} else {
		throw new Error(res.data.errorMessage)
	}
}

const successResult: IResponseSuccess = {
    status: PaymentStatus.Success,
	data: {
		databaseId: 567,
		sum: 10000,
		from: 2,
		to: 4
	}
}

getIdFromData(successResult);