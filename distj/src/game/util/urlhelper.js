"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UrlHelper {
    getUrlGetString() {
        let parts = window.location.hash.split('?', 2);
        if (parts[1] != undefined)
            return parts[1];
        return "";
    }
    hasParam(key) {
        let param = this.splitUrl(this.getUrlGetString());
        return param[key] != null;
    }
    getParam(key) {
        if (this.hasParam(key)) {
            return this.splitUrl(this.getUrlGetString())[key];
        }
        return null;
    }
    getHash() {
        return window.location.hash.replace('#', '').split('?')[0];
    }
    splitUrl(uparam) {
        let params = {};
        let kvPairs = uparam.split('&');
        kvPairs.forEach(kv => {
            let d = kv.split('=', 2);
            if (d.length > 0) {
                params[d[0]] = d.length == 2 ? d[1] : null;
            }
        });
        return params;
    }
}
exports.UrlHelper = UrlHelper;
