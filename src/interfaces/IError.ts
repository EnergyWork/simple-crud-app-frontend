interface IError {
    Error: IErrorData
}

interface IErrorData {
    Code: number
    Message: string
}

export default IError
