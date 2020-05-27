"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const TStuff = __importStar(require("../index"));
class RenderTest extends TStuff.Renderer {
    getTemplate() {
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
            `);
    }
    postRender() {
        this.setVal('age', 22);
        this.setVal('name', 'Timo');
        this.setVal('joke', "hahaa blablabla");
        this.bindEvent('form', TStuff.HtmlEvents.KeyUp, (e) => {
            console.log('KeyUp');
        });
        this.bindEvent('select', TStuff.HtmlEvents.Change, (e) => {
            console.log('change');
            console.log(e);
        });
        this.bindEvent('click', TStuff.HtmlEvents.Click, (e) => {
            console.log('Click');
        });
    }
}
var x = new RenderTest();
var el = document.getElementById('a');
if (el == null) {
    console.log('näh');
}
else {
    el.innerHTML = x.getTemplate();
    x.postRender();
}
