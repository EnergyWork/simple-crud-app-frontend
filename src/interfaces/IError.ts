interface IError {
    Code(): number
    Message(): string
    SetCode(a: number): void
    SetMessage(a: string): void
}

export default IError
