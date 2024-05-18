import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAppointmentPageRoutingModule } from './edit-appointment-routing.module';

import { EditAppointmentPage } from './edit-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    EditAppointmentPageRoutingModule
  ],
  declarations: [EditAppointmentPage]
})
export class EditAppointmentPageModule {}