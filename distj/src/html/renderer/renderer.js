"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlEvents;
(function (HtmlEvents) {
    HtmlEvents[HtmlEvents["Click"] = 0] = "Click";
    HtmlEvents[HtmlEvents["Change"] = 1] = "Change";
    HtmlEvents[HtmlEvents["KeyUp"] = 2] = "KeyUp";
})(HtmlEvents = exports.HtmlEvents || (exports.HtmlEvents = {}));
class Renderer {
    constructor() {
        this.elementId = 0;
        this.elementId = Renderer.autoId++;
    }
    getVal(name) {
        const el = document.querySelector(`[data-model='${name}-${this.elementId}']`);
        if (el == null) {
            console.log('Cant find element');
            return;
        }
        if (el.tagName == 'input' || el.tagName == 'select') {
            return el.value;
        }
        else {
            return el.textContent;
        }
    }
    setVal(name, value) {
        const el = document.querySelector(`[data-model='${name}-${this.elementId}']`);
        if (el == null) {
            console.log('Cant find element');
            return;
        }
        if (el.tagName.toLowerCase() == 'input' || el.tagName.toLowerCase() == 'select') {
            el.value = value;
        }
        else {
            el.textContent = value;
        }
    }
    dataModel(name) {
        return `data-model='${name}-${this.elementId}'`;
    }
    bindEvent(name, type, action) {
        let elList = document.querySelectorAll(`[data-event='${name}']`);
        if (elList.length < 1) {
            console.log('Cant find elements');
            return;
        }
        elList.forEach(el => {
            if (type === HtmlEvents.Click) {
                el.addEventListener('click', (e => action(e)));
            }
            else if (type === HtmlEvents.Change) {
                if (el.tagName.toLowerCase() == 'inputtemp') {
                    el.addEventListener('input', (e => action(e)));
                }
                else {
                    el.addEventListener('change', (e => action(e)));
                }
            }
            else if (type === HtmlEvents.KeyUp) {
                el.addEventListener('keyup', (e => action(e)));
            }
        });
    }
}
exports.Renderer = Renderer;
Renderer.autoId = 0;
