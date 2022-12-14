export default class CError {
    public Code: number
    public Message: string

    constructor(code: number, message = '') {
        this.Code = code
        this.Message = message
    }
}
