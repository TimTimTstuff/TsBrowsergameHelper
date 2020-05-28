export enum HtmlEvents {
    Click,
    Change,
    KeyUp
}

export abstract class Renderer {
    protected elementId: number = 0;
    public static autoId: number = 0;

    constructor() {
        this.elementId = Renderer.autoId++
    }

    abstract getTemplate(): string; //soll html für das element zurückgeben. 
    abstract postRender(): void; //enthält methoden die nach dem rendern des html ausgeführt werden sollen. 

    getVal(name: string): any {
        const el = document.querySelector(`[data-model='${name}-${this.elementId}']`)
        if (el == null) {
            console.log('Cant find element')
            return
        }

        if (el.tagName == 'input' || el.tagName == 'select') {
            return (<HTMLInputElement>el).value
        } else {
            return (<HTMLElement>el).textContent
        }

    }

    setVal(name: string, value: any): void {
        const el = document.querySelector(`[data-model='${name}-${this.elementId}']`)
        if (el == null) {
            console.log('Cant find element')
            return
        }
        if (el.tagName.toLowerCase() == 'input' || el.tagName.toLowerCase() == 'select') {
            (<HTMLInputElement>el).value = value
        } else {
            (<HTMLElement>el).textContent = value
        }
    }

    dataModel(name: string): string {
        return `data-model='${name}-${this.elementId}'`
    }

    bindEvent(name: string, type: HtmlEvents, action: (e: Event) => void): void {
        let elList = document.querySelectorAll(`[data-event='${name}']`)

        if (elList.length < 1) {
            console.log('Cant find elements')
            return
        }
        elList.forEach(el => {
            if (type === HtmlEvents.Click) {
                el.addEventListener('click', (e => action(e)))
            } else if (type === HtmlEvents.Change) {
                if (el.tagName.toLowerCase() == 'inputtemp') {
                    el.addEventListener('input', (e => action(e)))
                } else {
                    el.addEventListener('change', (e => action(e)))
                }

            } else if (type === HtmlEvents.KeyUp) {
                el.addEventListener('keyup', (e => action(e)))
            }
        })

    }
}
