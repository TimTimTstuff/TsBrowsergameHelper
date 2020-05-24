import { NumberAttribute, NumberAttributeType } from './NumberAttribute'

export class NumberAttributeBag {
    getValue(): number {
        return this._calculatedValue
    }

    getAttributeList():NumberAttribute[] {
        return this._values
    }

    private _values : NumberAttribute[] = []
    private _calculatedValue : number = 0;

    private calculateValue() : void {
        let baseValue:number = 0
        let percentage:number = 0
        this._values.forEach(a => {
            if(a.type == NumberAttributeType.FIXED_VALUE) {
                baseValue += a.value
            }else if(a.type == NumberAttributeType.PERCENTAGE_ADD){
                percentage += a.value
            }
        });

        baseValue *= 1+percentage

        this._values.forEach(a => {
            if(a.type == NumberAttributeType.PERCENTAGE_MULT) {
                baseValue *= 1+a.value
            }
        })

        this._calculatedValue = Math.round(baseValue*100)/100

    }

    public addModifier(attr:NumberAttribute) {
        this._values.push(attr)
        this.calculateValue()
    }

    public removeModifier(attr:NumberAttribute) {
        
        let ri = this._values.indexOf(attr)
        if(ri == -1) {
            ri = this._values.indexOf(this._values.find(c => {return c.key == attr.key && c.type == attr.type && c.value == attr.value})||<NumberAttribute>{})
            if(ri == -1) return
        }
        this._values.splice(ri,1)
        this.calculateValue()
    }

    public removeModifierByKey(key:string) {
        let toRemove = this._values.filter(a => a.key == key)
        toRemove.forEach(tr => {
            this.removeModifier(tr)
        })
    }
}