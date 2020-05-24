import * as TGame from '../src/game/TStuffGame'


export class AttrTest{
    run():void {
   
let fixed1 : TGame.NumberAttribute = {
    type: TGame.NumberAttributeType.FIXED_VALUE,
    value: 100000,
    key: 'f1'
}
 
let fixed2 : TGame.NumberAttribute = {
    type: TGame.NumberAttributeType.FIXED_VALUE,
    value: 1000,
    key: 'f2'
}

let fixed3 : TGame.NumberAttribute = {
    type: TGame.NumberAttributeType.FIXED_VALUE,
    value: 100,
    key: 'f3'
}

let percAdd1 : TGame.NumberAttribute = {
    type: TGame.NumberAttributeType.PERCENTAGE_ADD,
    value: 0.1,
    key: 'pa1'
}


let percAdd2 : TGame.NumberAttribute = {
    type: TGame.NumberAttributeType.PERCENTAGE_ADD,
    value: 0.5,
    key: 'pa2'
}

let percAdd3 : TGame.NumberAttribute = {
    type: TGame.NumberAttributeType.PERCENTAGE_ADD,
    value: 2.0,
    key: 'pa3'
}

let percMul1 : TGame.NumberAttribute = {
    type: TGame.NumberAttributeType.PERCENTAGE_MULT,
    value: 0.1,
    key: 'pm1'
}

let percMul2 : TGame.NumberAttribute = {
    type: TGame.NumberAttributeType.PERCENTAGE_MULT,
    value: 0.2,
    key:'pm2'
}

let percMul3 : TGame.NumberAttribute = {
    type: TGame.NumberAttributeType.PERCENTAGE_MULT,
    value: 0.5,
    key:'pm3'
}
function assertEqual(ex:number,ac:number){
    let r = ex === ac
    console.log("Exp",ex,"Act",ac,"Match",r)
}
let cab = new TGame.NumberAttributeBag()
cab.addModifier(fixed1)
assertEqual(cab.getValue(),100000)
cab.removeModifier(fixed1)
assertEqual(cab.getValue(),0)
cab.addModifier(fixed1)
cab.addModifier(fixed2)
assertEqual(cab.getValue(),101000)     
cab.removeModifier(fixed1)
assertEqual(cab.getValue(),1000)
cab.removeModifier(fixed2)
assertEqual(cab.getValue(),0)
cab.addModifier(fixed3)
cab.addModifier(percAdd1)
assertEqual(cab.getValue(),110)
cab.addModifier(percAdd1)
assertEqual(cab.getValue(),120)
cab.addModifier(percMul1)
assertEqual(cab.getValue(),132)
cab.addModifier(percMul1)
assertEqual(cab.getValue(),145.2)
cab.removeModifier(percAdd1)
assertEqual(cab.getValue(),133.1)
cab.removeModifier(fixed3)
assertEqual(cab.getValue(),0)
cab.addModifier({type:TGame.NumberAttributeType.FIXED_VALUE, value:100,key:"hallo"})
assertEqual(cab.getValue(),133.1)
cab.removeModifier({type:TGame.NumberAttributeType.FIXED_VALUE, value:100, key:"hallo"})
assertEqual(cab.getValue(),0)
}
}
