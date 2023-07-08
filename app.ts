enum StatusCode {
    SUCCESS = 1,
    PENDING = 2,
    FAILED = 3,
}

const res = {
    message: "Success",
    statusCode: 1,
}

if (res.statusCode === StatusCode.SUCCESS) {
    console.log('success')
}

const enum Roles {
    ADMIN = 1,
    USER = 2,
}

const res2 = Roles.ADMIN;