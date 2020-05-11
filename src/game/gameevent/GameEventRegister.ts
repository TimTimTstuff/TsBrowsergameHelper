import { IGameEvent } from "./IGameEvent"

export class GameEventRegister {

    private _eventList: {[index:string]:IGameEvent} = {}

    public registerEvent(event:IGameEvent) {
        if(this._eventList[event.eventType] != undefined)
            throw new Error(`Event: ${event.eventType} allready registered!`)
        this._eventList[event.eventType] = event
    }

    public unregisterEvent(event:IGameEvent | string){
        if((event as IGameEvent).eventType != undefined){
            delete this._eventList[(event as IGameEvent).eventType]
        }else{
            delete this._eventList[event as string]
        }
    }

    public callEvent(eventType:string, caller:any, arg:any, throwErrorIfMissing: boolean = false){
        if(this._eventList[eventType] == undefined){
            if(throwErrorIfMissing) throw new Error(`Event: ${eventType} not registered!`)
            return
        }
        this._eventList[eventType].callEvent(caller, arg )
    }

}