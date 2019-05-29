import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  exports: []
})
export class AdminModule { }
