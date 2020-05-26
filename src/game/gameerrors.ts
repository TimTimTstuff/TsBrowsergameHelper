export class GameError {
    public static error(msg:string, err:number):GameErrorMessage {
        return {message: msg, error: err}
    }
}

export interface GameErrorMessage{
    message:string
    error:number
}

export enum GameError_Inventory {
    ItemDoesNotExist = 0,
    CantCreateItemExists = 1
}