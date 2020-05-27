import * as TStuff from '../index'

class RenderTest extends TStuff.Renderer {
    getTemplate(): string {
        return (
            /*html*/
            `
            <input  data-event='select' ${this.dataModel('name')} value='' type='text' />
            <select data-event='select'  ${this.dataModel('age')} >
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
            </select>
            <span data-event='click' ${this.dataModel('joke')}></span>
            `
        )
    }
    postRender(): void {
        this.setVal('age',22)
        this.setVal('name','Timo')
        this.setVal('joke',"hahaa blablabla")

        this.bindEvent('form', TStuff.HtmlEvents.KeyUp, (e)=>{
            console.log('KeyUp')
        })

        this.bindEvent('select',TStuff.HtmlEvents.Change ,(e)=>{
            console.log('change')
            console.log(e)
        })

        this.bindEvent('click',TStuff.HtmlEvents.Click, (e)=>{
            console.log('Click')
        })

    }

}


var x = new RenderTest()

var el = document.getElementById('a')
if(el == null) {
    console.log('näh')
    
}else{
    el.innerHTML = x.getTemplate()
x.postRender()
}
