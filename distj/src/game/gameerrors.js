"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameError {
    static error(msg, err) {
        return { message: msg, error: err };
    }
}
exports.GameError = GameError;
var GameError_Inventory;
(function (GameError_Inventory) {
    GameError_Inventory[GameError_Inventory["ItemDoesNotExist"] = 0] = "ItemDoesNotExist";
    GameError_Inventory[GameError_Inventory["CantCreateItemExists"] = 1] = "CantCreateItemExists";
})(GameError_Inventory = exports.GameError_Inventory || (exports.GameError_Inventory = {}));
