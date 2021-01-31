import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppointmentListComponent } from './components/appointment/appointment-list.component';
import { AppointmentService } from './services/appointment.service';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AppointmentListComponent,
    AppointmentComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppointmentListComponent,
        pathMatch: 'full',
        //children: [
        //  {
        //    path: 'add',
        //    component: AppointmentComponent
        //  },
        //  {
        //    path: 'edit',
        //    component: AppointmentComponent
        //  }
        //]
      },
      { path: 'add', component: AppointmentComponent },
      { path: 'edit/:id', component: AppointmentComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
