export declare enum HtmlEvents {
    Click = 0,
    Change = 1,
    KeyUp = 2
}
export declare abstract class Renderer {
    protected elementId: number;
    static autoId: number;
    constructor();
    abstract getTemplate(): string;
    abstract postRender(): void;
    getVal(name: string): any;
    setVal(name: string, value: any): void;
    dataModel(name: string): string;
    bindEvent(name: string, type: HtmlEvents, action: (e: Event) => void): void;
}
