interface IPayment {
    sum: number,
    from: number,
    to: number
}

enum PaymentStatus {
    Success = "success",
    Failed = "failed"
}

interface IPaymentRequest extends IPayment{}

interface DataSuccess extends IPayment{
    databaseId: number,
}

interface DataFailed {
    errorMessage: string,
    errorCode: number
}

interface PaymentSuccess {
    status: PaymentStatus.Success,
    data: DataSuccess,
}

interface PaymentFailed {
    status: PaymentStatus.Failed,
    data: DataFailed
}