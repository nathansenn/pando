"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var ui = require("../ui");
var config = require("../lib/conf");
var configuration;
(function (configuration_1) {
    var _this = this;
    configuration_1.init = function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var answers, configuration, err_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                configuration = config.empty;
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, ui.inquirer.committer()];
                            case 2:
                                answers = _a.sent();
                                configuration.committer = answers.committer;
                                configuration.node = answers.node;
                                ui.spinners.configuration.start();
                                return [4 /*yield*/, config.initialize(configuration)];
                            case 3:
                                _a.sent();
                                ui.spinners.configuration.succeed();
                                resolve();
                                return [3 /*break*/, 5];
                            case 4:
                                err_1 = _a.sent();
                                ui.spinners.configuration.fail(err_1);
                                reject(err_1);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    }); };
})(configuration || (configuration = {}));
var dao;
(function (dao_1) {
    var _this = this;
    dao_1.deploy = function () { return __awaiter(_this, void 0, void 0, function () {
        var dao;
        return __generator(this, function (_a) {
            try {
                ui.spinners.dao.start();
                // dao = await pando.dao.deploy()deployDAO()
                ui.spinners.dao.succeed('test');
                Promise.resolve(dao);
            }
            catch (err) {
                ui.spinners.dao.fail(err);
                Promise.reject(err);
            }
            return [2 /*return*/];
        });
    }); };
})(dao || (dao = {}));
// 
// const deployPandoApp = async (dao: string) => {
//   let app: string
// 
//   try {
//     ui.spinners.deployPandoApp.start()
//     app = await pando.deployPandoApp(dao)
//     spinners.pando.succeed(repo)
//     return sapp
//   } catch (err) {
//     spinners.deployPandoApp.fail(err)
//   }
// }
// 
// const grantAppManagerRole = async (address: string, dao: string) => {
//   try {
//     ui.spinners.grantAppManagerRole.start()
//     await pando.grantAppManagerRole(address, dao)
//     spinners.grantAppManagerRole.succeed(address, dao)
//   } catch (err) {
//     spinners.grantAppManagerRole.fail(err)
//   }
// }
exports.init = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        configuration.init()
            .then(function () { return dao.deploy(); })
            .catch(function (err) { });
        return [2 /*return*/];
    });
}); };
//# sourceMappingURL=init.js.map