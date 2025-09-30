export interface IErrorApi {
    errors: IError
}

export interface IError {
    message: string
    statusCode: number
    [key: string]: string[]
}