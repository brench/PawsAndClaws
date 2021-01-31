import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../../model/appointment';
import { AppointmentService } from '../../services/appointment.service';
import { faCoffee, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'appointment-list',
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[];
  faCoffee = faCoffee;
  faTrash = faTrash;
  faEdit = faEdit;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.appointmentService.getCurrentAppointments()
      .subscribe(res => this.appointments = res || []);
  }

  showAddScreen(): void {
    this.router.navigate(['add']);
  }

  showEditScreen(appointment: Appointment): void {
    this.router.navigate(['edit', appointment.id], {state: {appointment: appointment}});
  }

  onDelete(id: number): void {
    if (!confirm('Are you sure you want to delete this Appointment?')) return;

    this.appointmentService.deleteAppointment(id)
      .subscribe(res => {
        this.appointments = this.appointments.filter(a => a.id !== id);
      });
  }
}
