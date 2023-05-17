var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  BrowserSessionStorageType: () => import_api_client_core.BrowserSessionStorageType,
  GadgetClientError: () => import_api_client_core.GadgetClientError,
  GadgetConnection: () => import_api_client_core.GadgetConnection,
  GadgetInternalError: () => import_api_client_core.GadgetInternalError,
  GadgetOperationError: () => import_api_client_core.GadgetOperationError,
  GadgetRecord: () => import_api_client_core.GadgetRecord,
  GadgetRecordList: () => import_api_client_core.GadgetRecordList,
  GadgetValidationError: () => import_api_client_core.GadgetValidationError,
  InvalidRecordError: () => import_api_client_core.InvalidRecordError
});
var import_api_client_core = __toModule(require("@gadgetinc/api-client-core"));
__reExport(exports, __toModule(require("./Client.js")));
__reExport(exports, __toModule(require("./types.js")));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BrowserSessionStorageType,
  GadgetClientError,
  GadgetConnection,
  GadgetInternalError,
  GadgetOperationError,
  GadgetRecord,
  GadgetRecordList,
  GadgetValidationError,
  InvalidRecordError
});
//# sourceMappingURL=index.js.map
