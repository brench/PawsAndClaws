import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../../model/appointment';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();
  appointmentForm: FormGroup;
  today: string = this.getCurrentDateFormatted();
  // addEditLabel: string = 'Add';

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // let state = this.router.getCurrentNavigation().extras.state;
    // let appointmentId = this.route.snapshot.paramMap.get('id');
    // if (state) {
    //   this.appointment = state.appointment;
    // } else if (appointmentId) {
    //   this.appointmentService.getAppointment(+appointmentId)
    //     .subscribe(res => {
    //       this.appointment = res;
    //       this.setUpForm();
    //     });
    // }
    // if (this.appointment.id) {
    //   this.addEditLabel = 'Edit';
    // }
  }

  ngOnInit() {
    let currentNav = this.router.getCurrentNavigation();
    // let state = this.router.getCurrentNavigation().extras.state;
    let appointmentId = this.route.snapshot.paramMap.get('id');
    if (currentNav && currentNav.extras.state) {
      this.appointment = currentNav.extras.state.appointment;
      this.setUpForm();
    } else if (appointmentId) {
      this.appointmentService.getAppointment(+appointmentId)
        .subscribe(res => {
          this.appointment = res;
          this.setUpForm();
        });
    } else {
      this.setUpForm();
    }
  }

  setUpForm() {
    this.appointmentForm = new FormGroup({
      petName: new FormControl(this.appointment.petName, [Validators.required, Validators.maxLength(50)]),
      petOwnerFirstName: new FormControl(this.appointment.petOwnerFirstName, [Validators.required, Validators.maxLength(50)]),
      petOwnerLastName: new FormControl(this.appointment.petOwnerLastName, [Validators.required, Validators.maxLength(50)]),
      petOwnerPhone: new FormControl(this.appointment.petOwnerPhone, [Validators.required, Validators.maxLength(50)]),
      reason: new FormControl(this.appointment.reason, [Validators.required, Validators.maxLength(500)]),
      date: new FormControl(this.appointment.date, [Validators.required])
    });
  }

  getCurrentDateFormatted(): string {
    const currentDate:Date = new Date();
    let dd:any = currentDate.getDate();
    let mm:any = currentDate.getMonth()+1;
    let yyyy:any = currentDate.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    return yyyy + '-' + mm + '-' + dd;
  }

  get petName() { return this.appointmentForm.get('petName'); }
  get petOwnerFirstName() { return this.appointmentForm.get('petOwnerFirstName'); }
  get petOwnerLastName() { return this.appointmentForm.get('petOwnerLastName'); }
  get petOwnerPhone() { return this.appointmentForm.get('petOwnerPhone'); }
  get reason() { return this.appointmentForm.get('reason'); }
  get date() { return this.appointmentForm.get('date'); }
  get addEditLabel() {
    return this.appointment.id ? 'Edit' : 'Add';
  }

  onSubmit(): void {
    this.appointmentForm.markAllAsTouched();
    
    if (!this.appointmentForm.valid) return;

    var data = this.appointmentForm.value;
    if (this.appointment.id) {
      data.id = this.appointment.id;
      this.appointmentService.updateAppointment(data)
        .subscribe(res => {
            this.router.navigate(['']);
          }
        )
    } else {
      // data.id = 0;
      this.appointmentService.addAppointment(data)
        .subscribe(res => {
            this.router.navigate(['']);
          }
        );
    }

  }

  onCancel(): void {
    this.router.navigate(['']);
  }
}
