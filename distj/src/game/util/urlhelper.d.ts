export declare class UrlHelper {
    getUrlGetString(): string;
    hasParam(key: string): boolean;
    getParam(key: string): string | null;
    getHash(): string;
    private splitUrl;
}
