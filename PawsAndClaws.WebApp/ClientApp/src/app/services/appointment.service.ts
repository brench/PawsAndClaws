import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Appointment } from "../model/appointment";
import { BaseService } from "./base.service";


@Injectable()
export class AppointmentService extends BaseService {

  apiUrl: string = 'appointment/';

  //constructor() {
  //  // super();
  //  this.apiUrl = 'appointment/';
  //}

  getCurrentAppointments(): Observable<Appointment[]> {
    return this.get<Appointment[]>(`${this.apiUrl}`);
  }

  getAppointment(id: number): Observable<Appointment> {
    return this.get<Appointment>(`${this.apiUrl}${id}`);
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.post<Appointment>(`${this.apiUrl}`, appointment);
  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    return this.put<Appointment>(`${this.apiUrl}`, appointment);
  }

  deleteAppointment(appointmentId: number) {
    return this.delete(`${this.apiUrl}`, appointmentId);
  }
}
