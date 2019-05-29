import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [DashboardComponent, ErrorComponent],
  imports: [
    CommonModule
  ],
  exports: []
})
export class SharedModule { }
