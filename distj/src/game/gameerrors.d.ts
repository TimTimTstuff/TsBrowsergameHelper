export declare class GameError {
    static error(msg: string, err: number): GameErrorMessage;
}
export interface GameErrorMessage {
    message: string;
    error: number;
}
export declare enum GameError_Inventory {
    ItemDoesNotExist = 0,
    CantCreateItemExists = 1
}
