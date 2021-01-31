"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
var base_service_1 = require("./base.service");
var AppointmentService = /** @class */ (function (_super) {
    __extends(AppointmentService, _super);
    function AppointmentService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiUrl = 'appointment/';
        return _this;
    }
    //constructor() {
    //  // super();
    //  this.apiUrl = 'appointment/';
    //}
    AppointmentService.prototype.getCurrentAppointments = function () {
        return this.get("" + this.apiUrl);
    };
    AppointmentService.prototype.addAppointment = function (appointment) {
    };
    AppointmentService.prototype.updateAppointment = function (appointment) {
    };
    AppointmentService.prototype.deleteAppointment = function (appointmentId) {
    };
    return AppointmentService;
}(base_service_1.BaseService));
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map