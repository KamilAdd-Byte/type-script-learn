"use strict";
// zdefinowane typy na github
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitelyTyped = void 0;
var DefinitelyTyped = /** @class */ (function () {
    function DefinitelyTyped() {
        this._gitHubLink = 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/absolute';
        //komenda w konsoli tworząca package.json
        this._npm = '~$npm init';
        //instalowanie bibliotek w terminalu
        this._npmJQuery = '~$npm install @types/jquery --save-dev';
    }
    DefinitelyTyped.prototype.showLink = function () {
        return this._gitHubLink.toString();
    };
    return DefinitelyTyped;
}());
exports.DefinitelyTyped = DefinitelyTyped;
console.log(DefinitelyTyped.toString());
