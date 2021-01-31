"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
var BaseService = /** @class */ (function () {
    // protected apiUrl: string;
    function BaseService(http) {
        this.http = http;
        this.basePath = 'http://localhost:51659/api/v2.0/';
    }
    BaseService.prototype.get = function (url) {
        return this.http.get(url);
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map