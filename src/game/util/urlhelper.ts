export class UrlHelper {

    public getUrlGetString():string{
        let parts =window.location.hash.split('?',2)
        if(parts[1] != undefined) return parts[1]
        return ""
    }
 
    public hasParam(key : string) : boolean{
        let param = this.splitUrl(this.getUrlGetString())
        return param[key]!=null
    }

    public getParam(key: string): string | null{
        if(this.hasParam(key)){
            return this.splitUrl(this.getUrlGetString())[key]
        }
        return  null
    }

    public getHash(): string {
       return  window.location.hash.replace('#', '').split('?')[0]
    }

    private splitUrl(uparam:string): {[index:string]:string|null}{
        let params: {[index:string]:string|null} = {};
        let kvPairs = uparam.split('&');
        kvPairs.forEach(kv => {
            let d = kv.split('=',2)
            if(d.length > 0){
                params[d[0]] = d.length == 2?d[1]:null
            }
        });
        return params;
    }
}