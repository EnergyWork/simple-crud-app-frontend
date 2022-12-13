import IError from '../../interfaces/IError.js'

export default class CustomError implements IError {
    private code: number
    private message: string

    constructor(code: number, message = '') {
        this.code = code
        this.message = message
    }

    public Code(): number {
        return this.code
    }

    public Message(): string {
        return this.message
    }

    public SetCode(code: number) {
        this.code = code
    }

    public SetMessage(message: string) {
        this.message = message
    }
}
